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
| `CONTACT_FROM`   | **yes**  | `onboarding@resend.dev` (testing only)   |
| `CONTACT_TO`     | no       | `sales@teknoppy.com`                     |
| `CONTACT_CC`     | no       | `sanal@teknoppy.com` (`none` to disable) |

Then redeploy — env vars are only picked up by a new deployment.

Without `RESEND_API_KEY` the endpoint returns 500 and the forms show their
"please call or email us" fallback. `CONTACT_TO` and `CONTACT_CC` accept
comma-separated lists.

### Verifying the domain is not optional

A Resend account with no verified domain is in **testing mode**: it can only
send to the account holder's own address, and any enquiry addressed to
sales@teknoppy.com is rejected with a 403. The form cannot work in production
until teknoppy.com is verified.

1. Go to [resend.com/domains](https://resend.com/domains) → **Add Domain** →
   `teknoppy.com`.
2. Add the DKIM, SPF and MX records it generates to teknoppy.com's DNS,
   copy-pasted exactly. (The MX record is what receives bounce and complaint
   feedback.) Verification usually completes within ~15 minutes, though DNS can
   take up to 72 hours to propagate.
3. Set `CONTACT_FROM` to an address on the verified domain — for example
   `Teknoppy Website <website@teknoppy.com>` — in both `.env` and Vercel.

Leaving `CONTACT_FROM` on the shared `onboarding@resend.dev` sender is fine for
a quick test to your own address, but it is unauthenticated for teknoppy.com,
cannot reach the real inboxes, and is spam-prone. Adding a DMARC record at
`_dmarc.teknoppy.com` afterwards is recommended.

### Testing it

```sh
npm run test:contact    # sends one real enquiry via Resend, reports what happened
```

Note that `npm run dev` **does not serve `/api/contact`** — Astro only serves
`src/pages/`, while `api/` is deployed by Vercel. Submitting a form on the Astro
dev server always fails. To exercise the form in a browser locally, use
`vercel dev` instead, or test on a Vercel preview deployment.
