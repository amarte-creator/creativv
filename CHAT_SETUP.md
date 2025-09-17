# Chat Setup Guide

## OpenRouter Integration

This project uses OpenRouter to provide AI-powered chat functionality. Follow these steps to set up the chat:

### 1. Get OpenRouter API Key

1. Visit [OpenRouter](https://openrouter.ai/)
2. Sign up for a free account
3. Go to [API Keys](https://openrouter.ai/keys)
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables

1. Open the `.env.local` file in the root directory
2. Replace `your_openrouter_api_key_here` with your actual OpenRouter API key:

```env
OPENROUTER_API_KEY=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
```

### 3. Update Calendly URL (Optional)

If you have a different Calendly booking link, update it in the `.env.local` file:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/contacto-servicioscreativos/30min
```

### 4. Restart Development Server

After updating the environment variables, restart your development server:

```bash
npm run dev
```

## Chat Features

The chat system includes:

- **AI-powered responses** using OpenRouter's DeepSeek Chat v3.1 model (free tier)
- **Custom system prompt** focused on Creativv's services
- **Calendly integration** for booking consultations
- **Loading states** and error handling
- **Professional conversation flow** designed to convert visitors to clients

## System Prompt

The chat uses a custom system prompt that:
- Introduces Creativv's services (Automation, BI, Web Development)
- Guides conversations toward booking consultations
- Maintains professional but friendly tone
- Focuses on understanding client needs and providing custom solutions

## Troubleshooting

If the chat is not working:

1. Check that your OpenRouter API key is correctly set in `.env.local`
2. Verify the API key has sufficient credits
3. Check the browser console for any error messages
4. Ensure the development server has been restarted after environment changes
