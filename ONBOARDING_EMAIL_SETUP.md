# Institution Onboarding Email Setup

This document explains how to set up email notifications for the institution onboarding form.

## Setup Required

### 1. Supabase Edge Function
The edge function `send-onboarding-email` has been created and needs to be deployed to your Supabase project.

### 2. Email Service (Resend)
You'll need to set up a Resend account and get an API key:

1. Go to [Resend.com](https://resend.com) and create an account
2. Get your API key from the dashboard
3. Add the API key as a secret in your Supabase project:
   ```bash
   supabase secrets set RESEND_API_KEY=your_api_key_here
   ```

### 3. Email Configuration
Update the email settings in the edge function (`supabase/functions/send-onboarding-email/index.ts`):

- **From email**: Change `onboarding@weechoo.com` to your verified domain
- **To email**: Change `hello@weechoo.com` to your actual email address where you want to receive notifications

### 4. Deploy the Edge Function
Deploy the function to your Supabase project:
```bash
supabase functions deploy send-onboarding-email
```

## How It Works

1. User fills out the 3-step onboarding form
2. On submission, the form data is sent to the Supabase Edge Function
3. The edge function formats the data into an HTML email
4. Email is sent via Resend to your specified email address
5. User sees success confirmation

## Email Template

The email includes:
- Company Information (name, contact, email, phone, location)
- Team Details (size, industry, budget)
- Special Requirements
- Submission timestamp

## Error Handling

- Toast notifications for success/failure
- Loading states during submission
- Console logging for debugging

## Testing

Once deployed, test the flow by:
1. Going to `/institution-onboarding`
2. Filling out the form completely
3. Submitting and checking your email
4. Verifying the edge function logs in Supabase dashboard