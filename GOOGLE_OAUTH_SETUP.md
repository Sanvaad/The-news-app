# Google OAuth Setup Guide

## Error: "OAuth client was not found" / "Error 401: invalid_client"

This error occurs when the Google Client ID is not properly configured. Follow these steps to fix it:

## Step 1: Create Google OAuth Credentials

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Create or select a project**
3. **Enable Google+ API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it
4. **Create OAuth 2.0 credentials**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Select "Web application"
   - Add authorized origins:
     - `http://localhost:5173` (for development)
     - `http://localhost:3000` (if using port 3000)
     - Your production domain (when deployed)
   - Add authorized redirect URIs:
     - `https://aecwzaraqxmzadvavcxr.supabase.co/auth/v1/callback`
     - (This is your Supabase auth callback URL)

## Step 2: Configure Supabase

1. **Go to your Supabase project**: https://supabase.com/dashboard
2. **Navigate to Authentication > Providers**
3. **Enable Google provider**
4. **Add your Google credentials**:
   - Client ID: (from Google Cloud Console)
   - Client Secret: (from Google Cloud Console)
5. **Add redirect URL**: `https://aecwzaraqxmzadvavcxr.supabase.co/auth/v1/callback`

## Step 3: Update Environment Variables

Replace the placeholder in your `.env` file:

```bash
# Replace YOUR_GOOGLE_CLIENT_ID_HERE with your actual Google Client ID
VITE_GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
```

## Step 4: Restart Development Server

After updating the `.env` file, restart your development server:

```bash
npm run dev
# or
yarn dev
```

## Important Notes

- ⚠️ **Never commit your actual Google Client ID to version control**
- ✅ The app will show a helpful message if the Client ID is not configured
- ✅ Make sure your domain is added to Google's authorized origins
- ✅ Test in incognito mode to avoid cached authentication issues

## Troubleshooting

### Common Issues:

1. **"OAuth client was not found"**
   - Check that `VITE_GOOGLE_CLIENT_ID` is set correctly in `.env`
   - Verify the Client ID exists in Google Cloud Console

2. **"redirect_uri_mismatch"**
   - Add your current domain to authorized redirect URIs in Google Cloud Console

3. **"access_blocked"**
   - Make sure your app is not in testing mode, or add test users in Google Cloud Console

4. **Button not showing**
   - Check browser console for errors
   - Ensure the Google Sign-In script is loading properly

## Current Status

✅ Error handling added - app won't crash if Client ID is missing
✅ Helpful messages shown when Google OAuth is not configured
✅ Environment variables properly configured in `.env` file

Once you complete the setup above, Google Sign-In will work properly!