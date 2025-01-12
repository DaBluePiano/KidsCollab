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
          light: "#f4efe4", // background
          lightgray: "#ddd5c2", // borders
          gray: "#b3ab9a", // graph links, heavier borders
          darkgray: "#545351", // body text
          dark: "#1C1F26", // header text and icons
          secondary: "#dd7f2a", // link colour, current graph node
          tertiary: "#1887bf", // hover states, visited graph nodes
          highlight: "rgba(255, 167, 38, 0.15)", // internal link background, highlighted text, highlighted lines of code
          textHighlight: "#F59E0B", // markdown highlighted text background
        },
        darkMode: {
          light: "#0F172A", // background
          lightgray: "#1E293B", // borders
          gray: "#475569", // graph links, heavier borders
          darkgray: "#94A3B8", // body text
          dark: "#E2E8F0", // header text and icons
          secondary: "#3B82F6", // link colour, current graph node
          tertiary: "#F59E0B", // hover states, visited graph nodes
          highlight: "rgba(59, 130, 246, 0.15)", // internal link background, highlighted text, highlighted lines of code
          textHighlight: "#FACC15", // markdown highlighted text background
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
