# Next blog using Sanity CMS and Tailwind

This project is built with the objective of creating a basic blog to implement Sanity CMS as the backend with information of the tools I use on a daily basis as a front end developer.

To install

```bash
git pull
npm i
```

If someone wants to experiment with this template with their own Sanity studio on their local environment, it will be necessary to install Sanity cli with the following command:

```
npm i -g @sanity/cli
```

After this, create a new Sanity project with:

```
sanity init
```

After this, follow the Sanity cli steps and for ease of use just create a project with the Blog template already prepared by the Sanity team

When installed, you can now create your .env.local file with the following line:

```
NEXT_SANITY_LOCAL_URL=localUrl
```

If the idea is to publish the blog you can create a new env variable with the published Sanity project's url.

## Enjoy!
