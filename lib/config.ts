import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [];

export const PLACEHOLDER_INPUT = "Ask about our policies & procedures. Be specific and avoid acronyms.";

export const GREETING = "Hi Livelihood NW, how can I help?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      // Adjusted to match Livelihood NW's professional aesthetic
      hue: 180, // Teal/blue-gray base (matching #246579 secondary color)
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      // Livelihood NW brand colors:
      // Primary: #7cad42 (green) - main brand color
      // Secondary: #246579 (teal) - supporting color
      // Dark: #133042 (dark teal) - dark variant
      primary: theme === "dark" ? "#7cad42" : "#7cad42", // Brand green (#7cad42)
      level: 2, // Medium-high intensity for brand visibility
    },
  },
  radius: "round",
  // See: https://chatkit.studio/playground to explore more theme options
});
