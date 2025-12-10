# Research Dump Sample - API Design Patterns

**Topic:** REST API Design Best Practices
**Date Collected:** December 2025
**Purpose:** Understanding modern API design for upcoming project

---

## Article 1: "RESTful API Design - 2025 Edition"

Source: techdesign.io/rest-api-2025
Author: Sarah Chen
Date: November 2025

Key points I highlighted:

- Use HTTP verbs properly (GET for reads, POST for creates, PUT for updates, DELETE for deletes)
- Version your API in the URL path (/api/v1/users not /api/users?version=1)
- Return appropriate status codes (200, 201, 400, 404, 500, etc.)
- Use plural nouns for resource names (/users not /user)
- Implement pagination for list endpoints (don't return 10,000 records at once)
- Use filtering, sorting, and field selection query parameters
- Document everything with OpenAPI/Swagger

Example she gave of good endpoint structure:
GET /api/v1/users?limit=20&offset=40&sort=created_at&order=desc

She emphasised: "Your API is a contract with your users. Breaking changes are expensive."

Security recommendations:

- Always use HTTPS
- Implement rate limiting
- Use OAuth 2.0 for authentication
- Never put sensitive data in URLs (they get logged)

---

## Article 2: "The Death of REST? GraphQL vs REST in 2025"

Source: devtrends.com/graphql-vs-rest
Author: Marcus Kim
Date: September 2025

Interesting take - he argues REST isn't dying but GraphQL is better for certain use cases.

When to use REST:

- Simple CRUD operations
- Public APIs with many unknown clients
- When caching is critical
- When you want strict contracts

When to use GraphQL:

- Complex data requirements
- Mobile apps (reduce over-fetching)
- Internal APIs where you control clients
- When you need flexible querying

He said something that stuck with me: "REST is like a buffet - you get what we serve. GraphQL is like a restaurant menu - you order exactly what you want."

His conclusion: Most companies should still start with REST. Add GraphQL later if specific problems emerge.

---

## Article 3: My Own Notes from "Building Scalable APIs" Video

(I watched this last week, took notes in a separate file)

Key takeaways:

- Stateless APIs scale horizontally easily
- Use Redis for caching frequently accessed data
- Database connection pooling is critical (don't create new connections per request)
- Monitor everything - response times, error rates, throughput
- Implement health check endpoints for load balancers

The speaker mentioned PM2 for process management in Node.js - run multiple instances on one server.

One point I need to research more: He mentioned "Circuit Breaker pattern" for handling downstream service failures. Didn't fully understand that, need to look it up.

---

## Random Thoughts from Slack Discussion Yesterday

Team was discussing our new API project. Some notes I captured:

@priya: "We should version from day one, even if we think we won't need it"
@james: "Agreed, and let's use /v1/ in the path, not headers"
@alex: "What about backwards compatibility? How long do we support old versions?"
@priya: "Standard practice is support current and previous version, deprecate after 6 months notice"

Also discussed authentication:

- JWT tokens for authentication
- Separate read and write permissions
- API keys for server-to-server, OAuth for user-facing

James raised a good question: Should we build the API first and then the UI, or build them together?
Consensus: API-first approach, but have UI team involved in API design from start.

---

## Code Example from StackOverflow

Found this when researching rate limiting in Express:

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
});

app.use("/api/", limiter);
```

Simple but effective. Someone in comments mentioned using Redis for distributed rate limiting when you have multiple servers. Makes sense.

---

## Company Examples I've Been Looking At

**Stripe API** - Often cited as gold standard

- Incredible documentation
- Consistent endpoint structure
- Excellent error messages with suggestions
- Versioning done right (they support old versions for years)
- SDKs for every major language

What I like: Their errors don't just say "bad request", they say "The `email` field must be a valid email address. You provided: 'invalid-email'"

**GitHub API** - Also really well designed

- Clear resource hierarchy
- Good use of links in responses (HATEOAS principle)
- Comprehensive filtering and searching
- Rate limiting is transparent (headers tell you your limit and remaining requests)

**Slack API** - Mixed feelings

- Documentation is good
- But endpoint naming is inconsistent (some use camelCase, some use snake_case)
- Authentication flow is more complex than it needs to be
- Error messages could be clearer

Learning: Consistency matters more than any individual decision.

---

## Questions I Still Have

1. How do we handle partial failures? (e.g., bulk create where some succeed, some fail)
2. What's the best practice for soft deletes vs hard deletes via API?
3. Should we expose our internal database IDs or use UUIDs?
4. How do we version breaking changes to the data model, not just endpoints?
5. What about webhooks? Should we build those from day one or add later?
6. How do we test API performance at scale before going to production?

---

## Action Items

- [ ] Draft our API design guidelines document
- [ ] Set up OpenAPI/Swagger for documentation
- [ ] Research Circuit Breaker pattern (for handling downstream failures)
- [ ] Look into API testing tools (Postman? Insomnia? Something else?)
- [ ] Schedule design review meeting with team
- [ ] Create example endpoints for user resource (GET, POST, PUT, DELETE)

---

## Things to Remember

- Start simple, add complexity when needed
- Document as you build, not after
- Make breaking changes extremely carefully
- Test with real-world data volumes
- Think about the developer experience - people need to use this API

Marcus from Article 2 said: "The best API is one that's obvious to use." That's the goal.
