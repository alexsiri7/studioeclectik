// Send the bare <project>.pages.dev address to the real domain, where Cloudflare hides the
// email from scrapers. Per-deploy preview hosts (<hash>.<project>.pages.dev) still work.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname.endsWith(".pages.dev") && url.hostname.split(".").length === 3) {
    return Response.redirect(`https://studioeclectik.com${url.pathname}${url.search}`, 301);
  }
  return next();
}
