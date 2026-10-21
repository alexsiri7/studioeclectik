// hello@studioeclectik.com -> both founders (a routing rule can only forward to one address).
// FORWARD_TO is a comma-separated Worker secret so personal addresses stay out of this public repo:
//   wrangler secret put FORWARD_TO
export default {
  async email(message, env) {
    const destinations = env.FORWARD_TO.split(",").map((s) => s.trim()).filter(Boolean);
    await Promise.all(destinations.map((to) => message.forward(to)));
  },
};
