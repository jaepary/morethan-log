const CONFIG = {
  // profile setting (required)
  profile: {
    name: "jeff",
    image: "", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "",
    bio: "Less is more",
    email: "jaepary@gmail.com",
    linkedin: "jaepil",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `pmreview`,
      href: "https://medium.com/pmreview",
    },
  ],
  // blog setting (required)
  blog: {
    title: "ASLOG - 알아두면 쓸모있는",
    description: "알아두면 쓸모있는 기술 블로그",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://www.aslog.kr",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["개발문화", "PRD", "클린", "아키텍처", "SOLID", "REST", "API"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "jaepary/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
