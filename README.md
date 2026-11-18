# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run check:links`     | Audit every link in `dist/` after a build        |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 📝 Content (Payload CMS)

Page copy is edited in the Payload CMS in [cms/](cms/) and pulled into the content
files (`src/data/**`, `src/content/**`) before each build, so the site stays static.

| Command | Action |
| :-- | :-- |
| `npm run cms:pull` | Overwrite the content files with what is in the CMS |
| `npm run cms:pull -- --check` | List content files that differ from the CMS, write nothing |

`npm run build` runs `cms:pull` first. It needs `PAYLOAD_URL` and `PAYLOAD_API_KEY`
(see [.env.example](.env.example)); without `PAYLOAD_URL` the build uses the committed
files. Running the CMS, the content map and deployment are covered in
[cms/README.md](cms/README.md).

## ✉️ Contact form

Every form posts JSON from the browser straight to
[FormSubmit](https://formsubmit.co) at `https://formsubmit.co/ajax/sales@teknoppy.com`.
FormSubmit emails the enquiry to **sales@teknoppy.com**, CC **sanal@teknoppy.com**
(set per form with `_cc`, `_subject` and `_template: 'table'` in the request body).
There is no server code and no API key.

- FormSubmit answers HTTP 200 even when it refuses a post, so each form checks
  `success === 'true'` in the JSON reply before showing thanks or redirecting.
- The address was activated on 2026-11-18 by clicking the link FormSubmit emails
  on the first submission. Changing the address means activating it again.
- `PUBLIC_CONTACT_ENDPOINT` overrides the address for the forms that read it.
