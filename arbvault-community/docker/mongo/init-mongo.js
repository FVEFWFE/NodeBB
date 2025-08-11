// Switch to admin database
db = db.getSiblingDB('admin');

// Create nodebb user with appropriate permissions
db.createUser({
  user: process.env.MONGO_USERNAME || 'nodebb',
  pwd: process.env.MONGO_PASSWORD || 'nodebb_pass',
  roles: [
    {
      role: 'readWrite',
      db: 'nodebb'
    },
    {
      role: 'dbAdmin',
      db: 'nodebb'
    }
  ]
});

// Switch to nodebb database
db = db.getSiblingDB('nodebb');

// Create initial collections
db.createCollection('objects');
db.createCollection('users');
db.createCollection('topics');
db.createCollection('posts');
db.createCollection('categories');
db.createCollection('groups');
db.createCollection('sessions');
db.createCollection('giveaways');
db.createCollection('giveaway_entries');
db.createCollection('giveaway_claims');
db.createCollection('reputation_logs');
db.createCollection('reputation_sync');

// Create indexes for performance
db.users.createIndex({ username: 1 }, { unique: true });
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ reputation: -1 });
db.topics.createIndex({ cid: 1, lastposttime: -1 });
db.posts.createIndex({ tid: 1, timestamp: 1 });
db.giveaways.createIndex({ status: 1, endTime: 1 });
db.giveaway_entries.createIndex({ giveawayId: 1, userId: 1 });
db.giveaway_claims.createIndex({ userId: 1, giveawayId: 1 });
db.reputation_logs.createIndex({ userId: 1, timestamp: -1 });

print('NodeBB database initialized successfully');