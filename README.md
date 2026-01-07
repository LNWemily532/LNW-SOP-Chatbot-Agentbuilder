# ChatKit Starter Template

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![NextJS](https://img.shields.io/badge/Built_with-NextJS-blue)
![OpenAI API](https://img.shields.io/badge/Powered_by-OpenAI_API-orange)

This repository is the simplest way to bootstrap a [ChatKit](http://openai.github.io/chatkit-js/) application. It ships with a minimal Next.js UI, the ChatKit web component, and a ready-to-use session endpoint so you can experiment with OpenAI-hosted workflows built using [Agent Builder](https://platform.openai.com/agent-builder).

## What You Get

- Next.js app with `<openai-chatkit>` web component and theming controls
- API endpoint for creating a session at [`app/api/create-session/route.ts`](app/api/create-session/route.ts)
- Config file for starter prompts, theme, placeholder text, and greeting message

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create your environment file

Copy the example file and fill in the required values:

```bash
cp .env.example .env.local
```

You can get your workflow id from the [Agent Builder](https://platform.openai.com/agent-builder) interface, after clicking "Publish":

<img src="./public/docs/workflow.jpg" width=500 />

You can get your OpenAI API key from the [OpenAI API Keys](https://platform.openai.com/api-keys) page.

### 3. Configure ChatKit credentials

Update `.env.local` with the variables that match your setup.

- `OPENAI_API_KEY` — API key created **within the same org & project as your Agent Builder**
- `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` — the workflow you created in [Agent Builder](https://platform.openai.com/agent-builder)
- (optional) `CHATKIT_API_BASE` - customizable base URL for the ChatKit API endpoint

> Note: if your workflow is using a model requiring organization verification, such as GPT-5, make sure you verify your organization first. Visit your [organization settings](https://platform.openai.com/settings/organization/general) and click on "Verify Organization".

### 4. Run the app

```bash
npm run dev
```

Visit `http://localhost:3000` and start chatting. Use the prompts on the start screen to verify your workflow connection, then customize the UI or prompt list in [`lib/config.ts`](lib/config.ts) and [`components/ChatKitPanel.tsx`](components/ChatKitPanel.tsx).

### 5. Deploy your app

#### Deploy to Vercel (Recommended)

This project is configured for easy deployment on Vercel. Follow these steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import your project to Vercel**
   - Go to [Vercel](https://vercel.com) and sign in
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings

3. **Configure Environment Variables in Vercel**
   - In your Vercel project settings, go to "Environment Variables"
   - Add the following variables:
     - `OPENAI_API_KEY` - Your OpenAI API key (from [API Keys](https://platform.openai.com/api-keys))
     - `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` - Your workflow ID (from Agent Builder)
     - (Optional) `CHATKIT_API_BASE` - Custom API base URL if needed
   - Make sure to add these for **Production**, **Preview**, and **Development** environments

4. **Deploy**
   - Click "Deploy" and wait for the build to complete
   - Your app will be available at `https://your-project.vercel.app`

5. **Configure Domain Allowlist (Required)**
   - After deployment, copy your Vercel deployment URL (e.g., `https://your-project.vercel.app`)
   - Go to [OpenAI Domain Allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)
   - Add your Vercel domain to the allowlist
   - This is required for ChatKit to work on your deployed domain

6. **Custom Domain (Optional)**
   - In Vercel project settings, go to "Domains"
   - Add your custom domain
   - Update the domain allowlist in OpenAI with your custom domain

#### Local Build Test

Before deploying, you can test the production build locally:

```bash
npm run build
npm start
```

This will help you catch any build issues before deploying to Vercel.

## Customization Tips

- Adjust starter prompts, greeting text, [chatkit theme](https://chatkit.studio/playground), and placeholder copy in [`lib/config.ts`](lib/config.ts).
- Update the event handlers inside [`components/.tsx`](components/ChatKitPanel.tsx) to integrate with your product analytics or storage.

## References

- [ChatKit JavaScript Library](http://openai.github.io/chatkit-js/)
- [Advanced Self-Hosting Examples](https://github.com/openai/openai-chatkit-advanced-samples)
