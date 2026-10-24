# Studio Eclectik — holding page

The temporary holding page for [studioeclectik.com](https://studioeclectik.com).

## Changing the site

Everything visitors see lives in [`public/`](public/):

- `index.html` — the page (text, layout and styles are all in this one file)
- `logo.svg`, `emma.svg`, `katharina.svg` — lettering taken from the original design
- `favicon.svg` — browser tab icon

Open a pull request with your change. Cloudflare builds a preview of every pull request and
links it in the PR, so you can check it before it goes live. Merging into `main` publishes
it to studioeclectik.com within a minute or two.

Small text edits can be made straight from GitHub: open `public/index.html`, click the pencil
icon, edit, and choose "Create a new branch and start a pull request".

## How it's hosted

- **Site:** Cloudflare Pages, deployed automatically from `main`. No build step; `public/` is served as-is.
- **`functions/_middleware.js`:** redirects the `*.pages.dev` address to studioeclectik.com.
- **Email:** Zoho Mail (UK data centre) hosts the `emma@` and `kat@` mailboxes; `hello@` is a
  Zoho group that delivers to both. DNS (MX, SPF, DKIM, DMARC) is on Cloudflare.
