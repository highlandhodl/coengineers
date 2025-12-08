# Deployment Checklist

A comprehensive checklist to ensure your application is ready for production deployment.

---

## Project: [Project Name]

**Version:** [Version number]
**Deployment Date:** [Date]
**Deployed By:** [Your name]
**Environment:** [Production / Staging]

---

## Pre-Deployment Checklist

### Code Quality

- [ ] All tests pass locally
- [ ] No console.log statements left in production code
- [ ] No commented-out code blocks
- [ ] Code is formatted consistently
- [ ] Linter shows no errors
- [ ] No TypeScript errors (if applicable)
- [ ] Build completes successfully
- [ ] Git repository is clean (no uncommitted changes)

### Functionality

- [ ] All acceptance criteria met for deployed features
- [ ] All user stories marked complete are tested
- [ ] Edge cases are handled
- [ ] Error handling is in place
- [ ] Loading states are shown where appropriate
- [ ] Success/error messages are clear

### Security

- [ ] **No secrets in code** (API keys, passwords, tokens)
- [ ] Environment variables are used for sensitive data
- [ ] `.env` file is in `.gitignore`
- [ ] User input is validated and sanitised
- [ ] SQL injection protection in place
- [ ] XSS protection implemented
- [ ] CSRF tokens on forms (if applicable)
- [ ] HTTPS is enforced
- [ ] Security headers are configured
- [ ] Authentication works correctly
- [ ] Authorization checks are in place
- [ ] Rate limiting is configured (if applicable)

### Performance

- [ ] Images are optimised
- [ ] Assets are minified
- [ ] Unused dependencies removed
- [ ] Database queries are optimised
- [ ] Caching is configured where appropriate
- [ ] Page load time is acceptable (<3s)
- [ ] No memory leaks detected
- [ ] API responses are reasonable (<500ms for most)

### Responsive Design

- [ ] Works on desktop (1920x1080)
- [ ] Works on tablet (768x1024)
- [ ] Works on mobile (375x667)
- [ ] Touch targets are large enough on mobile
- [ ] Text is readable on all screen sizes
- [ ] No horizontal scrolling

### Accessibility

- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Colour contrast meets WCAG AA standards (4.5:1)
- [ ] Images have alt text
- [ ] Form fields have labels
- [ ] Focus indicators are visible

### Browser Compatibility

- [ ] Tested in Chrome (latest)
- [ ] Tested in Firefox (latest)
- [ ] Tested in Safari (latest)
- [ ] Tested in Edge (latest)
- [ ] Tested in Mobile Safari (iOS)
- [ ] Tested in Chrome Mobile (Android)

### Database

- [ ] Migrations are ready
- [ ] Migrations tested on staging
- [ ] Rollback plan exists
- [ ] Backup taken before deployment
- [ ] Database credentials are secure
- [ ] Connection pooling configured
- [ ] Indexes are in place

### Configuration

- [ ] Environment variables documented
- [ ] Production environment variables set
- [ ] API endpoints point to production
- [ ] Feature flags configured (if applicable)
- [ ] CORS settings are correct
- [ ] Allowed origins configured

### Documentation

- [ ] README is up to date
- [ ] API documentation is current
- [ ] Environment setup instructions are clear
- [ ] Deployment process is documented
- [ ] Troubleshooting guide exists
- [ ] CHANGELOG is updated

### Legal & Compliance

- [ ] Privacy policy in place (if collecting user data)
- [ ] Terms of service published (if applicable)
- [ ] Cookie consent implemented (if required)
- [ ] GDPR compliance checked (if EU users)
- [ ] License file included
- [ ] Attribution for dependencies (if required)

---

## Deployment Steps

### 1. Prepare for Deployment

- [ ] Create deployment branch (if needed)
- [ ] Tag release version in git
- [ ] Update version number in `package.json`
- [ ] Update CHANGELOG.md

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### 2. Build & Test

- [ ] Run full test suite
- [ ] Create production build
- [ ] Test build locally

```bash
npm run test
npm run build
npm run start # Test production build locally
```

### 3. Database Migrations

- [ ] Backup production database
- [ ] Test migrations on staging
- [ ] Run migrations on production

```bash
# Backup database first!
npm run migrate:production
```

### 4. Deploy Application

[Platform-specific deployment steps]

#### Deploying to Vercel

- [ ] Push code to GitHub
- [ ] Verify Vercel picks up the deployment
- [ ] Monitor build logs
- [ ] Verify deployment successful
- [ ] Check deployment URL

#### Deploying to Other Platforms

[Add your platform-specific steps]

### 5. Configure Environment

- [ ] Set production environment variables
- [ ] Verify environment variables are correct
- [ ] Configure custom domain (if applicable)
- [ ] Set up SSL certificate

### 6. Post-Deployment Verification

- [ ] Visit production URL
- [ ] Test critical user flows
- [ ] Verify authentication works
- [ ] Check database connections
- [ ] Test API endpoints
- [ ] Verify external integrations work
- [ ] Check error logging is working

---

## Smoke Tests (Production)

[Quick tests to verify core functionality after deployment]

### Test 1: Homepage Loads

- [ ] Navigate to homepage
- [ ] Page loads without errors
- [ ] Navigation works

### Test 2: User Authentication

- [ ] Sign up creates new account
- [ ] Login works with correct credentials
- [ ] Login fails with incorrect credentials
- [ ] Logout works

### Test 3: Core Feature

- [ ] [Primary feature] works as expected
- [ ] Data persists correctly
- [ ] No errors in console

### Test 4: API Health

- [ ] Health check endpoint responds
- [ ] API returns expected data
- [ ] Error handling works

---

## Monitoring Setup

### Application Monitoring

- [ ] Error tracking configured (Sentry, LogRocket, etc.)
- [ ] Performance monitoring enabled
- [ ] Uptime monitoring configured
- [ ] Alerts set up for critical errors
- [ ] Dashboard created for key metrics

### Infrastructure Monitoring

- [ ] Server resource monitoring
- [ ] Database performance tracking
- [ ] API response time tracking
- [ ] Error rate tracking

### Analytics

- [ ] Analytics tracking installed (Google Analytics, Plausible, etc.)
- [ ] Key events tracked
- [ ] Conversion funnels set up
- [ ] Goals configured

---

## Rollback Plan

[Document how to rollback if something goes wrong]

### Quick Rollback Steps

1. **Immediate action if critical bug:**

   ```bash
   # Revert to previous deployment
   vercel rollback [deployment-url]
   ```

2. **Database rollback (if needed):**

   ```bash
   # Rollback last migration
   npm run migrate:rollback
   ```

3. **Restore database from backup:**
   ```bash
   # Instructions for your database provider
   ```

### Post-Rollback

- [ ] Notify team of rollback
- [ ] Document what went wrong
- [ ] Create bug report
- [ ] Plan fix
- [ ] Re-test before next deployment

---

## Communication Plan

### Pre-Deployment

- [ ] Notify team of deployment window
- [ ] Communicate expected downtime (if any)
- [ ] Alert stakeholders

### Post-Deployment

- [ ] Announce successful deployment
- [ ] Share release notes
- [ ] Update status page (if applicable)
- [ ] Post on social media (if applicable)

### If Issues Occur

- [ ] Notify team immediately
- [ ] Update status page
- [ ] Communicate with affected users
- [ ] Provide timeline for resolution

---

## Post-Deployment Tasks

### Immediate (Within 1 Hour)

- [ ] Monitor error logs
- [ ] Check performance metrics
- [ ] Verify user activity
- [ ] Test critical paths manually
- [ ] Confirm backups are working

### Within 24 Hours

- [ ] Review error reports
- [ ] Check performance baselines
- [ ] Verify all integrations working
- [ ] Monitor user feedback
- [ ] Review analytics data

### Within 1 Week

- [ ] Conduct retrospective
- [ ] Document lessons learned
- [ ] Address minor bugs found
- [ ] Update documentation with learnings
- [ ] Plan next iteration

---

## Success Criteria

[Define what successful deployment looks like]

**Deployment is successful if:**

- [ ] Application is accessible at production URL
- [ ] No critical errors in first 24 hours
- [ ] Core functionality works as expected
- [ ] Performance meets requirements
- [ ] No user complaints about broken features
- [ ] Error rate is below [X%]
- [ ] Response time is below [X ms]

---

## Metrics to Track

### Technical Metrics

- **Uptime:** Target 99.9%
- **Response Time:** Target <500ms
- **Error Rate:** Target <0.1%
- **Page Load Time:** Target <3s

### Business Metrics

- **Active Users:** [Target]
- **Conversion Rate:** [Target]
- **Retention Rate:** [Target]

---

## Known Issues

[Document any known issues that are acceptable for this release]

### Issue 1: [Description]

**Impact:** [Who/what is affected]
**Workaround:** [Temporary solution]
**Fix Planned:** [When it will be fixed]

---

## Emergency Contacts

[Who to contact if something goes wrong]

- **On-Call Developer:** [Name] - [Contact]
- **Database Admin:** [Name] - [Contact]
- **DevOps:** [Name] - [Contact]
- **Product Owner:** [Name] - [Contact]

---

## Useful Commands

```bash
# Check application logs
vercel logs [deployment-url]

# Check database status
npm run db:status

# Run health check
curl https://your-app.com/api/health

# Monitor errors
npm run logs:errors
```

---

## Deployment Log

[Keep a record of deployments]

### Deployment 1

**Date:** 2025-01-15 10:00 UTC
**Version:** v1.0.0
**Deployed by:** Sarah Chen
**Duration:** 5 minutes
**Issues:** None
**Rollback:** Not required

### Deployment 2

**Date:** 2025-01-22 14:30 UTC
**Version:** v1.1.0
**Deployed by:** Sarah Chen
**Duration:** 3 minutes
**Issues:** Minor styling bug found, fixed in hotfix
**Rollback:** Not required

---

## Retrospective Notes

[After deployment, reflect on what went well and what could improve]

### What Went Well

- [Positive observation]
- [What worked]

### What Could Be Better

- [Area for improvement]
- [Process to refine]

### Action Items

- [ ] [Improvement to implement]
- [ ] [Process to update]

---

## Resources

- **Production URL:** [https://your-app.com](https://your-app.com)
- **Staging URL:** [https://staging.your-app.com](https://staging.your-app.com)
- **Deployment Dashboard:** [Link]
- **Error Tracking:** [Link]
- **Analytics:** [Link]
- **Status Page:** [Link]

---

## Sign-Off

### Developer

- [ ] All checklist items complete
- [ ] Code deployed successfully
- [ ] Smoke tests passed

**Name:** [Name]
**Date:** [Date]

### Product Owner

- [ ] Deployment approved
- [ ] Feature acceptance confirmed
- [ ] Ready for users

**Name:** [Name]
**Date:** [Date]

---

## Celebration

- [ ] Ship it! 🚀
- [ ] Share with team
- [ ] Celebrate the win
- [ ] Take a moment to appreciate the work

**You shipped something. That's awesome.**

---

**Checklist Version:** 1.0
**Last Updated:** 2025-12-09
**Created by:** CoEngine
