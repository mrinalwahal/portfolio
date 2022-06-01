# My Personal Portfolio Website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmrinalwahal%2Fportfolio&project-name=portfolio&demo-title=Wahal's%20Portfolio&demo-description=Wahal's%20personal%20portfolio%20website%20based%20on%20Nuxt's%20Content%20module.&demo-url=https%3A%2F%2Fwah.al&demo-image=https%3A%2F%2Fwah.al%2Fprofile.png)

It's based on [Nuxt content docs theme](https://content.nuxtjs.org/themes/docs/). I hacked it together as per my requirements.

Feel free to fork or clone this repository if you want to deploy your own site. 

**If you use this repository for your own portfolio, [sponsor me](https://github.com/sponsors/mrinalwahal) to support this work.** ❤️ 
🚀
## Links

The social links available in the header, extra links available in the side navigation bar, as well as location in the footer, can be enabled from `content/settings.json` file. Following links are available:

- Instagram
- GitHub
- Twitter
- Mail
- Location
- Resume
- Call

Use my code for reference.

## Manual Setup

1. Fork this repository.
1. Clone the forked repository.

    ```
    git clone git@github.com:[your_username]/portfolio.git
    ```

1. Install dependencies:

    ```
    npm run install
    ```

1. Start developing locally with:

    ```
    npm run dev
    ```

1. Build the site once your are done with development. This will create the `dist/` directory for publishing to static hosting:

    ```
    npm run generate
    ```

To preview the static generated app, run `npm run start`

For detailed explanation on how things work, checkout [nuxt/content](https://content.nuxtjs.org) and [@nuxt/content theme docs](https://content.nuxtjs.org/themes-docs).

1. Deploy to Vercel.

    ```
    vercel --prod
    ```

    NOTE: Remember to override the default build command on Vercel project configuration to `nuxt generate`.