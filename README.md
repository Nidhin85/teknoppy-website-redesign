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
| `npm run test:contact`    | Send a real test enquiry through the contact form |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## ✉️ Contact form

Both forms — the footer CTA and the contact page — POST JSON to `/api/contact`
([`api/contact.js`](api/contact.js)), a Vercel serverless function that emails
the enquiry through [Resend](https://resend.com).

Enquiries go to **sales@teknoppy.com** with **sanal@teknoppy.com** on CC, and
`reply_to` is set to the enquirer so hitting Reply answers them directly.

### Setup

The form needs exactly one secret. In **Vercel → Settings → Environment
Variables** (Production), add:

| Variable         | Required | Default                                  |
| :--------------- | :------- | :--------------------------------------- |
| `RESEND_API_KEY` | **yes**  | —                                        |
| `CONTACT_FROM`   | no       | `website@teknoppy.com` (verified domain) |
| `CONTACT_TO`     | no       | `sales@teknoppy.com`                     |
| `CONTACT_CC`     | no       | `sanal@teknoppy.com` (`none` to disable) |

Then redeploy — env vars are only picked up by a new deployment.

Without `RESEND_API_KEY` the endpoint returns 500 and the forms show their
"please call or email us" fallback. `CONTACT_TO` and `CONTACT_CC` accept
comma-separated lists.

### The sender must be on a verified domain

**teknoppy.com is verified in Resend** (DKIM, SPF and MX in place), so the
default sender `Teknoppy Website <website@teknoppy.com>` delivers to any
recipient. Only override `CONTACT_FROM` with another address on that domain.

Do not point it at Resend's shared `onboarding@resend.dev` sandbox sender. That
address can only email the Resend account holder's own address; an enquiry to
sales@teknoppy.com comes back **403**, the endpoint returns 502, and the form
tells the visitor it could not send. That misconfiguration is what broke the
live form before — it looked like "the form is not connected" from the browser,
while the real failure was the sender address.

Adding a DMARC record at `_dmarc.teknoppy.com` is recommended.

### Testing it

```sh
npm run test:contact    # sends one real enquiry via Resend, reports what happened
```

Note that `npm run dev` **does not serve `/api/contact`** — Astro only serves
`src/pages/`, while `api/` is deployed by Vercel. Submitting a form on the Astro
dev server always fails. To exercise the form in a browser locally, use
`vercel dev` instead, or test on a Vercel preview deployment.
