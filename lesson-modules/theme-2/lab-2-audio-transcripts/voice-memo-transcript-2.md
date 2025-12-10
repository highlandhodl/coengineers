# Voice Memo Transcript - Bug Investigation

**Recorded:** 8 December 2025, 2:47 PM
**Duration:** 2m 18s
**Location:** Office

---

Right so I'm looking at this bug that Marcus reported, the search caching issue, and I think I found it.

So what's happening is... okay let me explain this properly... when you update a customer record, we're saving it to the database fine, that part works. But the search index isn't being updated at the same time.

We're using this library called... um... Meilisearch? No wait, ElasticSearch. No. [pause] Actually I think we're not using a search library at all, we're just doing SQL queries. Right. Yeah that's it.

So the SQL query is fine, but we're caching the results in Redis with a TTL of like 1 hour or something. So when you update a customer, the database has the new data but Redis still has the old cached results.

The fix should be pretty simple - we just need to invalidate the cache when we update a customer record. Like in the update function, after we save to the database, we delete the relevant cache keys.

Let me check... [typing sounds] ...yeah so in `customerController.ts` there's the update function, and it does the database update but doesn't touch the cache.

We need to add something like:

```
await redis.del(`customer_search:*`)
```

Actually wait, that would delete ALL search caches which is... not ideal but also not terrible? We only have like 50 active users so it's not gonna cause performance issues.

Better solution would be to be more specific about which cache keys to delete. Like just delete the ones that would include this customer's data. But that's more complex because you'd need to know... like... if they searched for "consulting" and this customer has "consulting" in their name or description, then... yeah it gets complicated.

I think for now let's just bust the whole search cache on any customer update. Simple, effective, and we can optimise later if it becomes a problem.

Actually, you know what, let me check if we're even using Redis. [typing]

Oh. Oh we're using in-memory cache. Node-cache library. That's... okay that's fine for dev but we should probably switch to Redis for production. Add that to the backlog.

But same principle - we just need to call `cache.del()` in the update function.

Let me... hang on... [typing sounds for 10 seconds]

Okay yeah I just added:

```javascript
cache.flushAll();
```

That's nuclear but it works. Search cache gets completely cleared whenever any customer is updated. Not efficient but correct.

Testing it now... [pause] ...yeah that fixes it! Update a customer, search immediately shows the new data.

I'll do a proper fix later where we only invalidate relevant cache entries, but this unblocks Marcus for now.

Committing this... "Fix search cache invalidation issue"... and done.

Okay. Next bug.
