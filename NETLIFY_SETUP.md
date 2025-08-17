# Netlify Deployment Setup

## Quick Setup (5 minutes)

### Step 1: Get Your Netlify Site ID
1. Go to https://app.netlify.com
2. Click on your site "auralo-final-collection"
3. Go to "Site settings"
4. Copy the "Site ID" (looks like: xxxxx-xxxx-xxxx-xxxx)

### Step 2: Get Your Netlify Auth Token
1. Go to https://app.netlify.com/user/applications#personal-access-tokens
2. Click "New access token"
3. Name it: "GitHub Actions Deploy"
4. Click "Generate token"
5. **COPY THE TOKEN NOW** (you won't see it again)

### Step 3: Add Secrets to GitHub
1. Go to https://github.com/blinds123/auralo-desert-set-2024/settings/secrets/actions
2. Click "New repository secret"
3. Add these two secrets:

**Secret 1:**
- Name: `NETLIFY_AUTH_TOKEN`
- Value: [Paste the token from Step 2]

**Secret 2:**
- Name: `NETLIFY_SITE_ID`
- Value: [Paste the Site ID from Step 1]

### Step 4: Deploy Automatically
Once you've added both secrets, the site will automatically deploy whenever you push to GitHub!

## Test Deployment
After adding secrets, the workflow will run automatically on the next push.

You can also manually trigger it:
1. Go to https://github.com/blinds123/auralo-desert-set-2024/actions
2. Click "Deploy to Netlify"
3. Click "Run workflow"

## Your Site URL
Your site is at: https://auralo-final-collection.netlify.app

---
Generated: 2025-08-16