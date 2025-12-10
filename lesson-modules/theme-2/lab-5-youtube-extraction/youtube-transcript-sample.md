# YouTube Transcript - "Building Scalable APIs with Node.js"

**Video Title:** Building Scalable APIs with Node.js - Best Practices 2025
**Channel:** TechEd Pro
**Duration:** 18m 32s
**Published:** 3 December 2025
**URL:** youtube.com/watch?v=example123

---

[00:00] Hey everyone, welcome back to TechEd Pro. Today we're going to talk about building scalable APIs with Node.js. This is something I get asked about a lot, especially from people who are starting to see their applications grow beyond just a few users.

[00:22] So let's start with the basics. When we talk about scalability, we're really talking about two things: vertical scalability and horizontal scalability. Vertical scaling means adding more resources to a single server - more CPU, more RAM, that kind of thing. Horizontal scaling means adding more servers and distributing the load across them.

[00:45] For Node.js APIs specifically, horizontal scaling is usually the way to go because Node runs on a single thread. Even if you have a 64-core CPU, a single Node process will only use one of those cores. So we need to think about how to run multiple processes and distribute traffic between them.

[01:08] Okay, so first principle: keep your API stateless. This is crucial. If you're storing session data or user state in memory on the server, you're going to have a bad time when you try to scale horizontally. Why? Because when a user makes their first request, it might go to server A, but their next request might go to server B, and server B doesn't know anything about that user.

[01:35] The solution is to store state externally. Use Redis for session management, use a database for user data, use S3 for file storage - whatever you need, just don't keep it in your Node process memory. Your API should be able to handle a request using only the information in that request plus whatever it can fetch from external sources.

[01:58] Second principle: use a proper process manager. Don't just run `node app.js` in production. Use PM2 or Forever or systemd or whatever you prefer, but use something that will restart your process if it crashes, that will let you run multiple instances, and that will let you do zero-downtime deployments.

[02:18] Let me show you a quick PM2 example. You can create an ecosystem file like this:

[02:25] [screen shows code]

```javascript
module.exports = {
  apps: [
    {
      name: "api",
      script: "./server.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
```

[02:35] This tells PM2 to run as many instances as you have CPU cores, in cluster mode. PM2 handles all the load balancing for you. It's beautiful.

[02:48] Third principle: implement proper error handling and logging. When you have multiple instances running across multiple servers, you need centralized logging. I recommend using something like Winston or Pino for logging, and shipping your logs to a service like LogDNA or Papertrail or the ELK stack if you're running your own infrastructure.

[03:12] Your error handling should be comprehensive too. Uncaught exceptions should be logged and the process should restart. You should have health check endpoints that your load balancer can ping to know if an instance is healthy. And you should be monitoring response times, error rates, all that good stuff.

[03:32] Fourth principle: database connection pooling. This is huge and so many people get this wrong. Every database connection has overhead - memory, TCP connections, all that stuff. If every single request creates a new database connection, you're going to run into limits very quickly.

[03:50] Use connection pooling. Libraries like pg for PostgreSQL or mysql2 for MySQL have built-in connection pooling. You create a pool of connections at startup, and requests borrow from the pool and return connections when they're done. Way more efficient.

[04:08] Here's what that looks like with PostgreSQL:

[04:12] [screen shows code]

```javascript
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "myapp",
  max: 20, // max number of connections
  idleTimeoutMillis: 30000,
});

// Later in your route handlers:
const result = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);
```

[04:28] See how we create the pool once, and then just use it for queries? Much better than creating a new connection every time.

[04:38] Fifth principle: caching. This is probably the single biggest impact you can have on API performance. Cache everything you reasonably can. Database queries that don't change often? Cache them. API responses that are the same for all users? Cache them. External API calls? Definitely cache them.

[05:00] Redis is your friend here. It's fast, it's simple, and it works great for caching. Here's a simple cache-aside pattern:

[05:08] [screen shows code]

```javascript
async function getUser(userId) {
  // Try cache first
  const cached = await redis.get(`user:${userId}`);
  if (cached) {
    return JSON.parse(cached);
  }

  // Cache miss, hit the database
  const user = await db.query("SELECT * FROM users WHERE id = $1", [userId]);

  // Store in cache for next time
  await redis.setex(`user:${userId}`, 3600, JSON.stringify(user));

  return user;
}
```

[05:32] One hour TTL on that cache. You'd adjust that based on how often your data changes. The point is, the second request for the same user doesn't touch the database at all.

[05:45] Sixth principle: rate limiting. When your API is public or even semi-public, you need to protect it from abuse. Someone making 10,000 requests per second can take down your API whether they mean to or not.

[06:02] Use a rate limiting middleware. Express-rate-limit is great for this. You can do simple IP-based rate limiting, or more sophisticated per-user rate limiting, or different limits for different endpoints. Here's a basic example:

[06:18] [screen shows code]

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
});

app.use("/api/", limiter);
```

[06:35] Seventh principle: use async/await properly. This sounds obvious but I see people making mistakes with this all the time. Node is single-threaded, which means blocking the event loop is death. If you do synchronous operations or if you use async/await incorrectly, you'll block the entire process.

[06:58] Don't do CPU-intensive work in your API handlers. If you need to do something like image processing or PDF generation or heavy calculations, offload it to a background job queue. Bull or Bee-Queue are great for this. Your API handler just queues the job and returns immediately, then the job gets processed by a worker process.

[07:20] Eighth principle: database indexing. I cannot stress this enough - make sure your database queries are actually using indexes. Use EXPLAIN to check your query plans. If you're doing a query that returns in 500ms with 100 rows but would take 30 seconds with 100,000 rows, you probably don't have the right indexes.

[07:43] Indexes on foreign keys, on columns you filter by, on columns you sort by - these can make orders of magnitude difference in performance.

[07:55] Ninth principle: monitoring and observability. You need to know what's happening in production. Response times, error rates, throughput, database query times, cache hit rates - all of this should be monitored.

[08:12] I like using Prometheus with Grafana for metrics, and Sentry for error tracking. You can also use all-in-one services like New Relic or DataDog if you prefer.

[08:25] The key is: when something goes wrong, you need to know about it quickly, and you need enough information to debug it.

[08:35] Tenth principle: load balancing. Once you're running multiple instances, you need something to distribute traffic between them. NGINX is the classic choice. You can also use AWS ALB if you're on AWS, or Google Cloud Load Balancer, or any number of other options.

[08:53] The load balancer sits in front of your application servers and distributes incoming requests across them. It also handles TLS termination, which takes load off your application servers.

[09:08] Here's a simple NGINX config for load balancing:

[09:12] [screen shows code]

```nginx
upstream api_servers {
  server 10.0.1.10:3000;
  server 10.0.1.11:3000;
  server 10.0.1.12:3000;
}

server {
  listen 80;
  server_name api.example.com;

  location / {
    proxy_pass http://api_servers;
  }
}
```

[09:28] NGINX will round-robin between those three servers. You can also configure it to do least-connections or IP hash or other strategies.

[09:40] Eleventh principle: graceful shutdown. When you deploy a new version of your API, you don't want to just kill the old processes and start new ones. That would drop any in-flight requests. Instead, you want graceful shutdown.

[09:58] What this means is: when you signal the process to stop, it stops accepting new connections but finishes handling any requests that are already in progress. Only once all in-flight requests are done does it actually exit.

[10:15] Here's how you implement that:

[10:18] [screen shows code]

```javascript
const server = app.listen(3000);

process.on("SIGTERM", () => {
  console.log("SIGTERM received, closing server gracefully");
  server.close(() => {
    console.log("All connections closed, exiting");
    process.exit(0);
  });

  // Force close after 30 seconds
  setTimeout(() => {
    console.error("Forcing shutdown after timeout");
    process.exit(1);
  }, 30000);
});
```

[10:42] This gives your server 30 seconds to finish up before forcing a shutdown. Most requests should complete in way less than that.

[10:52] Twelfth principle: HTTP/2 and compression. If you're not using HTTP/2 yet, you should be. It's faster, it multiplexes requests over a single connection, it has server push - it's just better. Most load balancers and CDNs support it now.

[11:10] Also make sure you're compressing your responses. Use the compression middleware in Express. It'll gzip your JSON responses and save a ton of bandwidth. Smaller responses mean faster load times for your users.

[11:26] Thirteenth principle: API versioning. This isn't directly about scaling but it's important for maintaining your API as it grows. Don't break backwards compatibility. Use version numbers in your URLs like `/api/v1/users` and `/api/v2/users`. When you make breaking changes, create a new version and give people time to migrate.

[11:48] Fourteenth principle: documentation. Again, not directly about scaling, but as your API grows and more people use it, good documentation becomes critical. Use OpenAPI/Swagger or similar. Auto-generate docs from your code if possible.

[12:05] Okay, let's talk about some real-world architecture patterns. When you're at small scale, you might have something like this:

[12:12] [screen shows diagram]

- Single server running Node
- PostgreSQL on the same server
- Everything in one place

[12:20] That's fine for getting started. But as you grow, you'll move to something like:

[12:25] [screen shows diagram]

- Load balancer (NGINX or cloud LB)
- 3-5 API servers running Node
- Separate database server (PostgreSQL)
- Redis for caching and sessions
- Maybe a CDN for static assets

[12:40] And at larger scale, you're looking at:

[12:43] [screen shows diagram]

- CDN at the edge
- Load balancer
- Auto-scaling group of API servers (10-100+)
- Database with read replicas
- Redis cluster for high availability
- Background job queue with workers
- Separate services for different parts of your API (microservices)
- Message queue for inter-service communication

[13:05] You don't need to start with that last one. Start simple and scale as needed. Don't over-engineer for scale you don't have yet.

[13:18] Let me talk about some common pitfalls I see people run into.

[13:23] Pitfall one: premature optimization. Don't spend weeks building a complex caching system if you have 10 users. Start simple, measure, then optimize the actual bottlenecks.

[13:38] Pitfall two: not monitoring properly. You can't optimize what you don't measure. Instrument your API from day one. Know your response times, your error rates, your throughput.

[13:52] Pitfall three: synchronous operations in request handlers. Don't read files synchronously. Don't do blocking crypto operations. Don't do heavy calculations. Anything that takes more than a few milliseconds should be async or offloaded to a worker.

[14:10] Pitfall four: not having proper error handling. Uncaught exceptions will crash your Node process. Make sure you have global error handlers, make sure you're catching promise rejections, make sure your process manager will restart crashed processes.

[14:28] Pitfall five: not thinking about database scaling early enough. Your database is often the bottleneck before your API servers are. Think about read replicas, think about connection pooling, think about indexes.

[14:45] Okay, let me show you a real example of a scalable API structure. This is from a production API I worked on that handles about 10 million requests per day.

[14:55] [screen shows file structure]

```
src/
├── server.js           # Entry point
├── app.js              # Express app setup
├── routes/             # Route handlers
│   ├── users.js
│   ├── products.js
│   └── orders.js
├── controllers/        # Business logic
├── models/             # Data models
├── middleware/         # Express middleware
│   ├── auth.js
│   ├── rateLimit.js
│   └── errorHandler.js
├── services/           # External service integrations
├── utils/              # Helper functions
└── config/             # Configuration
    ├── database.js
    ├── redis.js
    └── logger.js
```

[15:18] Keep your code organized. Routes are thin, they just handle HTTP concerns. Controllers have your business logic. Models handle data access. This separation makes it way easier to test and maintain.

[15:35] Here's what the database config might look like:

[15:38] [screen shows code]

```javascript
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = pool;
```

[16:00] And here's a sample route with proper error handling, caching, and validation:

[16:05] [screen shows code]

```javascript
const express = require("express");
const router = express.Router();
const cache = require("../config/redis");
const db = require("../config/database");
const { body, validationResult } = require("express-validator");

router.get("/users/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;

    // Check cache first
    const cached = await cache.get(`user:${userId}`);
    if (cached) {
      return res.json(JSON.parse(cached));
    }

    // Fetch from database
    const result = await db.query(
      "SELECT id, name, email, created_at FROM users WHERE id = $1",
      [userId],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = result.rows[0];

    // Cache for 5 minutes
    await cache.setex(`user:${userId}`, 300, JSON.stringify(user));

    res.json(user);
  } catch (error) {
    next(error); // Pass to error handler
  }
});

module.exports = router;
```

[16:45] See how this handles errors properly, uses caching, and has clear structure? That's what you want.

[16:55] Alright, let me wrap this up with some final thoughts.

[17:02] Scaling an API is not just about handling more requests. It's about building a system that's reliable, maintainable, and observable. You want to know what's happening, you want to recover from failures gracefully, and you want to make it easy to add features and fix bugs.

[17:22] Start simple. Don't build for a million users when you have a hundred. But make good architectural choices from the beginning. Keep things stateless, use proper error handling, monitor everything, and you'll be in good shape when you do need to scale.

[17:40] Remember: the best scaling strategy is often just adding more servers and a load balancer. Don't overcomplicate it. Horizontal scaling is straightforward with Node if you've built your API properly.

[17:55] Thanks for watching! If you found this helpful, please like and subscribe. I've got links in the description to all the tools and libraries I mentioned. And if you have questions, drop them in the comments and I'll do my best to answer.

[18:12] Next week we're going to talk about securing your API - authentication, authorization, all that good stuff. Should be a good one.

[18:22] Alright, I'll see you in the next video. Happy coding!

[18:32] [End]
