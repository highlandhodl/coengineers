# Troubleshooting Guide

This document covers common issues and solutions for the CoEngineers platform.

## Build Issues

### TypeScript Errors

**Symptom**: Build fails with TypeScript errors

**Solution**:

```bash
# Clean and rebuild
npm run type-check -- --build --clean
npm run type-check
npm run build
```

### Missing Dependencies

**Symptom**: `Cannot find module` errors

**Solution**:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Astro Configuration Errors

**Symptom**: Build fails with Astro config errors

**Solution**:

1. Check `astro.config.mjs` syntax
2. Verify all imports are correct
3. Run `npm run dev` to see detailed error

---

## API Issues

### 500 Internal Server Error

**Symptom**: API returns 500 status

**Possible Causes**:

1. **Missing environment variables**
   - Check Vercel Dashboard for env vars
   - Ensure all required variables are set

2. **Database connection failure**
   - Verify `SUPABASE_URL` is correct
   - Check `SUPABASE_SERVICE_ROLE_KEY` is valid
   - Test connection in Supabase Dashboard

3. **Email service failure**
   - Verify `RESEND_API_KEY` is valid
   - Check Resend Dashboard for errors

**Debug**:

```bash
# Check Vercel function logs
vercel logs --follow
```

### 400 Bad Request

**Symptom**: API returns 400 status

**Possible Causes**:

1. Invalid email format
2. Missing required fields
3. Invalid source parameter

**Solution**: Check request body format matches API spec

### 404 Not Found (Unsubscribe)

**Symptom**: Unsubscribe returns 404

**Cause**: Token not found in database

**Solution**: Verify token exists in `subscribers` table

---

## Email Issues

### Emails Not Sending

**Symptom**: No welcome email received

**Possible Causes**:

1. **Resend API key invalid**
   - Generate new key in Resend Dashboard
   - Update `RESEND_API_KEY` env var

2. **Email blocked by spam**
   - Check spam/junk folder
   - Verify domain setup in Resend

3. **Database insert failed**
   - Check `email_sends` table for missing records
   - Review API logs

### Email Formatting Issues

**Symptom**: Email displays incorrectly

**Solution**:

1. Test email in multiple clients (Gmail, Outlook, Apple Mail)
2. Use inline CSS only
3. Test with [Email on Acid](https://www.emailonacid.com/) or similar

---

## Database Issues

### Connection Refused

**Symptom**: Cannot connect to Supabase

**Solution**:

1. Check project is not paused in Supabase Dashboard
2. Verify `SUPABASE_URL` is correct
3. Check service role key hasn't been rotated

### RLS Blocking Queries

**Symptom**: Queries return empty results

**Cause**: Row Level Security blocking access

**Solution**: Ensure using service role key (bypasses RLS)

### Duplicate Key Errors

**Symptom**: Insert fails with unique constraint violation

**Cause**: Email already exists in `subscribers` table

**Solution**: Use upsert logic or check existence first

---

## Development Issues

### Hot Reload Not Working

**Symptom**: Changes don't appear in dev server

**Solution**:

```bash
# Restart dev server
npm run dev
```

### Test Failures

**Symptom**: Tests fail locally but pass in CI

**Possible Causes**:

1. Environment variable differences
2. Cache issues
3. Timing-dependent tests

**Solution**:

```bash
# Clear cache and run tests
rm -rf node_modules/.cache
npm run test:run
```

### Import Errors in Tests

**Symptom**: Tests fail with module resolution errors

**Solution**: Ensure `vitest.config.ts` uses `getViteConfig()` from `astro/config`

---

## Performance Issues

### Slow Build Times

**Symptom**: Build takes >5 minutes

**Solution**:

1. Check for large assets
2. Optimise images
3. Review MDX file count

### Slow Page Loads

**Symptom**: Pages take >3s to load

**Solution**:

1. Check Vercel Analytics for bottlenecks
2. Optimise images with proper sizing
3. Ensure assets are cached

---

## Quick Reference

| Issue             | First Step                     |
| ----------------- | ------------------------------ |
| Build fails       | Run `npm run type-check`       |
| API 500 error     | Check Vercel logs              |
| Email not sending | Verify Resend API key          |
| Database error    | Check Supabase Dashboard       |
| Tests failing     | Run `npm run test:run` locally |

## Getting Help

1. Check this troubleshooting guide
2. Review error logs in Vercel Dashboard
3. Search Astro/Starlight documentation
4. Create issue in GitHub repository
