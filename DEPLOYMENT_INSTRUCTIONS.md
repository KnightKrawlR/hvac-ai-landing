# Deployment Instructions

## Changes Made:

1. ✅ Added AI video to hero section
2. ✅ Video hosted on CDN for fast loading
3. ✅ Responsive design (mobile-friendly)
4. ✅ Updated booking URL in script.js

## Files Changed:

- `index.html` - Added video element to hero section
- `styles.css` - Added video styling and responsive layout
- `script.js` - Updated booking URL (already done)

## How to Deploy (2 Options):

### Option 1: Edit Files Directly on GitHub (Easiest - 2 minutes)

1. Go to: https://github.com/KnightKrawlR/hvac-ai-landing

2. **Update index.html:**
   - Click on `index.html`
   - Click the pencil icon (Edit)
   - Replace the entire file with the new version (attached)
   - Click "Commit changes"

3. **Update styles.css:**
   - Click on `styles.css`
   - Click the pencil icon (Edit)
   - Replace the entire file with the new version (attached)
   - Click "Commit changes"

4. **Update script.js:**
   - Click on `script.js`
   - Click the pencil icon (Edit)
   - Change line 2 to:
     ```javascript
     const BOOKING_URL = 'https://brand.artfulautomation.com/consultation-appointment';
     ```
   - Click "Commit changes"

5. **Wait 30 seconds** - Vercel will auto-deploy

6. **Check the live site:** https://hvac-ai-landing.vercel.app

### Option 2: Clone Repo and Push (If You Prefer Command Line)

```bash
# Clone the repo
git clone https://github.com/KnightKrawlR/hvac-ai-landing.git
cd hvac-ai-landing

# Copy the updated files from the attachments
# (index.html, styles.css, script.js)

# Commit and push
git add .
git commit -m "Add AI video to hero section and update booking URL"
git push origin master
```

## What the Video Does:

- **Autoplay**: Starts playing automatically when page loads
- **Muted**: Plays without sound (required for autoplay)
- **Loop**: Repeats continuously
- **Responsive**: Scales properly on mobile devices
- **Fast Loading**: Hosted on CDN for optimal performance

## Mobile View:

On mobile devices:
- Video appears ABOVE the text (order: -1 in CSS)
- Text is centered
- Everything stacks vertically
- Video still plays automatically

## Next Steps After Deployment:

1. **Test the live site** on desktop and mobile
2. **Add your chatbot code** (you mentioned you have this)
3. **Start sending traffic** to HVAC businesses

## Troubleshooting:

**If video doesn't play:**
- Check browser console for errors
- Ensure CDN URL is accessible: https://files.manuscdn.com/user_upload_by_module/session_file/108282707/wBfntkzwQUbKtSHZ.mp4
- Try opening the URL directly in browser

**If changes don't appear:**
- Wait 30-60 seconds for Vercel to deploy
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Check Vercel deployment status

## Files to Upload to GitHub:

All updated files are in: `/home/ubuntu/hvac-landing-page/`

- `index.html` (21KB)
- `styles.css` (14KB)
- `script.js` (1.8KB)

I'll attach these files in the next message.

