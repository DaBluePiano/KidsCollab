import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Kidscollab β",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'google', tagId: 'G-779LQMZ7RP'
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "dmSans",
        body: "lexend",
        code: "jetbrains-mono",
      },
      colors: {
        lightMode: {
          light: "#ebe3d3", // Clean and very light blue-gray for the page background
          lightgray: "#ddd5c2", // Softer light blue for borders and subtle accents
          gray: "#b3ab9a", // Muted gray-blue for links and heavier borders
          darkgray: "#545351", // Brighter, readable gray for body text
          dark: "#1C1F26", // Deep charcoal for headings and important text
          secondary: "#dd7f2a", // Rich blue for links and current section highlights
          tertiary: "#FFA726", // Warm orange for hover states and call-to-action highlights
          highlight: "#e7af3d38", // Light blue overlay for highlighting
          textHighlight: "#FFB74D", // Vibrant orange for highlighted text backgrounds
        },
        darkMode: {
          light: "#0F172A", // Deep navy for the page background
          lightgray: "#1E293B", // Muted blue-gray for borders
          gray: "#475569", // Subtle gray-blue for less prominent text
          darkgray: "#94A3B8", // Softer light blue for readable body text
          dark: "#E2E8F0", // Off-white for headings and prominent text
          secondary: "#3B82F6", // Bright blue for links and active elements
          tertiary: "#F59E0B", // Soft amber for hover states and highlights
          highlight: "rgba(59, 130, 246, 0.15)", // Light blue for hover backgrounds
          textHighlight: "#FACC15", // Brighter yellow for highlighted text
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
