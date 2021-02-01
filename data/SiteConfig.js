const config = {
  siteTitle: "Hyreads Official Blog", // Site title.
  siteTitleShort: "Hyblog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Hyreads Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "http://localhost:8000/", // Domain of your website without pathPrefix.
  pathPrefix: "/hyblog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "The Official Blog from Hyreads.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Hyreads Blog RSS feed", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "hyreadsblog", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Hyreads Editor", // Username to display in the author segment.
  userEmail: "hyreadskenya@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "www.twitter.com/hyreads", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Nairobi, Kenya", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "This is placeholder content. lorem ipsum do re mi fa so la ti do, do ti la so fa mi re do", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.

  userLinks: [
    {
      label: "Faebook",
      url: "https://facebook.com/Hyreads",
      iconClassName: "fa fa-facebook",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/hyreads",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "hyreadskenya@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2021. Hyblog", // Copyright string for the footer of the website and RSS feed.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = ""
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`

module.exports = config
