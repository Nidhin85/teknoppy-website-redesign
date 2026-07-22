// GitHub OAuth — step 1: redirect the user to GitHub's authorization page.
// Used by Sveltia/Decap CMS (config: backend.base_url + auth_endpoint: api/auth).
export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    res.statusCode = 500;
    res.end('Missing OAUTH_GITHUB_CLIENT_ID environment variable.');
    return;
  }
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const redirectUri = `${proto}://${host}/api/callback`;
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user',
    allow_signup: 'false',
  });
  res.statusCode = 302;
  res.setHeader('Location', `https://github.com/login/oauth/authorize?${params.toString()}`);
  res.end();
}
