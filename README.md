<div align="center">
    <img src="docs/hylogo.png" alt="Logo" width='200px' height='200px'/>
</div>

# Hyreads Official Blog

Official Blog for the Hyreads [platform](https://hyreads.com/).

[Blog Demo.](https://hyblog.netlify.app/)

This blog is based on the starter [Gatsby Material Starter](https://github.com/Vagr9K/gatsby-material-starter")

## Technologies

This blog was made with the following technologies:

- React
- Gatsby
- GraphQL
- Markdown
- [React-MD](https://github.com/mlaursen/react-md) for Material design
  - Integrated FontAwesome support
  - Integrated Material Icons support
- SASS/SCSS styling
- [NetlifyCMS](https://www.netlifycms.org/docs/intro/) support for creating/editing posts via admin panel for content editors not proficient in git.

Full feature list:

- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Automatic optimization of all image assets via `gatsby-image` for faster loading times
- RSS feeds (in development)
- Loading progress for slow networks
- Offline support
- Disqus comments support
  - Notifications about new comments
  - comments moderation
- Responsive design
  - On mobile, Disqus is loaded only after expanding comments for better performance
- Web App Manifest support
- Google Analytics support (in development)
- SEO

  - Sitemap generation
  - robots.txt
  - General description tags
  - Schema.org JSONLD (Google Rich Snippets)
  - OpenGraph Tags (Facebook/Google+/Pinterest)
  - Twitter Tags (Twitter Cards)

- Posts in Markdown
  - Embedded YouTube videos
  - Embedded Tweets in blog
- Tags
  - Seprate page for posts under each tag
- Categories
  - Separate page for posts under each category
- Suggested posts segment

- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - LinkedIn share button
  - Telegram share button

## NetlifyCMS

First of all, make sure to edit `static/admin/config.yml` and add your [GitHub/GitLab/NetlifyId credentials](https://www.netlifycms.org/docs/authentication-backends/):

```yml
backend:
  name: github # Refer to https://www.netlifycms.org/docs/authentication-backends/ for auth backend list and instructions
  branch: master # Branch to update
  repo: username/repo name # Repo for pushing new commits. Make sure to replace with your repo!
```

You can visit `/admin/` after and will be greeted by a login dialog (depending on the auth provider you ave chosen above).

For NetlifyCMS specific issues visit the [official documentation](https://www.netlifycms.org/docs/intro/).

## Theming

Edit `src/layout/theme.scss` to suit your needs.
You can use [Material color palette](https://react-md.mlaursen.com/customization/colors) provided by React-MD.

```css
@import "~react-md/src/scss/react-md";
$md-primary-color: $md-grey-400;
$md-secondary-color: $md-red-800;
$md-tertiary-color: $md-grey-300;
```

# Author

Jack Mkimbo ([@JackMkimbo](https://twitter.com/JackMkimbo))
