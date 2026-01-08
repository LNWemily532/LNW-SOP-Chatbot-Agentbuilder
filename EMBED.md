# Embedding ChatKit in Squarespace

This guide explains how to embed the Livelihood NW Chatbot in your Squarespace site using an iframe.

## Option 1: Basic Iframe Embed (Recommended)

Use this code in a Squarespace Code Block:

```html
<div style="width: 100%; max-width: 1200px; margin: 0 auto; height: 700px;">
  <iframe 
    src="https://sop-chatbot.livelihoodnw.org/embed" 
    width="100%" 
    height="100%" 
    frameborder="0" 
    style="border: none; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
    title="Livelihood NW Chatbot"
    allow="clipboard-read; clipboard-write"
    loading="lazy">
  </iframe>
</div>
```

### Step-by-Step Instructions for Squarespace:

1. **Edit your Squarespace page** where you want to embed the chatbot
2. **Add a Code Block:**
   - Click the `+` button to add a new block
   - Select "Code" from the block menu
3. **Paste the iframe code** above into the code block
4. **Click "Apply"** and then "Save"

## Option 2: Responsive Iframe with Fixed Height

For better mobile responsiveness:

```html
<div style="width: 100%; max-width: 1200px; margin: 0 auto;">
  <div style="position: relative; padding-bottom: 85%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <iframe 
      src="https://sop-chatbot.livelihoodnw.org/embed" 
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
      title="Livelihood NW Chatbot"
      allow="clipboard-read; clipboard-write"
      loading="lazy">
    </iframe>
  </div>
</div>
```

## Option 3: Full-Width Embed (for Full Page Sections)

If you want the chatbot to take up more space:

```html
<div style="width: 100%; height: 800px; padding: 20px;">
  <iframe 
    src="https://sop-chatbot.livelihoodnw.org/embed" 
    width="100%" 
    height="100%" 
    frameborder="0" 
    style="border: none; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
    title="Livelihood NW Chatbot"
    allow="clipboard-read; clipboard-write"
    loading="lazy">
  </iframe>
</div>
```

## Customization Options

### Adjust Height

Change the `height` value in the container div to adjust the chatbot height:

```html
<!-- For taller chatbot -->
<div style="height: 900px; ...">

<!-- For shorter chatbot -->
<div style="height: 600px; ...">
```

### Adjust Maximum Width

Change `max-width` to control how wide the chatbot can get:

```html
<!-- Narrower (800px max) -->
<div style="max-width: 800px; ...">

<!-- Wider (1400px max) -->
<div style="max-width: 1400px; ...">
```

### Add Margins/Padding

Add spacing around the iframe:

```html
<div style="margin: 40px auto; padding: 20px; ...">
```

## Important Notes

1. **Password Protection**: Users will need to enter the password to access the chatbot (set via `NEXT_PUBLIC_CHATBOT_PASSWORD` in Vercel)

2. **Domain Requirements**: Make sure `livelihoodnw.org` is added to the OpenAI Domain Allowlist

3. **HTTPS Required**: The iframe requires HTTPS (which your custom domain provides)

4. **Browser Compatibility**: Modern browsers support iframes. The chatbot will work in Chrome, Firefox, Safari, and Edge

5. **Mobile Responsive**: The embed page is optimized for mobile devices and will scale appropriately

## Testing

1. Test the embed URL directly: `https://sop-chatbot.livelihoodnw.org/embed`
2. Verify the password protection works
3. Test on different screen sizes (desktop, tablet, mobile)
4. Test on your Squarespace page after embedding

## Troubleshooting

**Iframe doesn't load:**
- Check that the URL `https://sop-chatbot.livelihoodnw.org/embed` is accessible
- Verify HTTPS is working
- Check browser console for any error messages

**Iframe appears blank:**
- Verify the password environment variable is set in Vercel
- Check that the domain is allowlisted in OpenAI
- Make sure the deployment was successful

**Sizing issues:**
- Adjust the height in the container div
- Use the responsive Option 2 if you need better mobile support
- Check if Squarespace has any CSS that might conflict
