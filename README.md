# My Personal Portfolio Website

It's based on [Nuxt content docs theme](). I hacked it together as per my requirements.

Feel free to fork or clone this repository if you want to deploy your own site. 

**Do give the repository a star to show your support.**

## Links

The social links available in the header, extra links available in the side navigation bar, as well as location in the footer, can be enabled from `settings.json` file. Following links are available:

- Instagram
- GitHub
- Twitter
- Mail
- Location
- Resume
- Call

Use my code for reference.

## Clone

```
git clone git@github.com:mrinalwahal/portfolio.git
```

## Setup

Install dependencies:

```
npm run install
```

## Development

```
npm run dev
```

## Static Generation

This will create the `dist/` directory for publishing to static hosting:

```
npm run generate
```

To preview the static generated app, run `npm run start`

For detailed explanation on how things work, checkout [nuxt/content](https://content.nuxtjs.org) and [@nuxt/content theme docs](https://content.nuxtjs.org/themes-docs).

## Deploy

```
vercel --prod
```

NOTE: Remember to override the default build command on Vercel project configuration to `nuxt generate`.