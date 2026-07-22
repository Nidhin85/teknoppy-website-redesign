// GitHub OAuth — step 2: exchange the code for a token and hand it back to the CMS
// window via postMessage (Decap/Sveltia external-OAuth protocol).
export default async function handler(req, res) {
  const provider = 'github';
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  const code = req.query && req.query.code;

  const respond = (status, content) => {
    const payload = JSON.stringify(content).replace(/</g, '\\u003c');
    const html = `<!doctype html><html><body><script>
  (function () {
    function receiveMessage(e) {
      window.opener.postMessage(
        'authorization:${provider}:${status}:' + '${payload}',
        e.origin
      );
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:${provider}', '*');
  })();
</script></body></html>`;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);
  };

  if (!clientId || !clientSecret) {
    respond('error', { error: 'Missing OAuth environment variables (OAUTH_GITHUB_CLIENT_ID / OAUTH_GITHUB_CLIENT_SECRET).' });
    return;
  }
  if (!code) {
    respond('error', { error: 'No authorization code returned from GitHub.' });
    return;
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await tokenRes.json();
    if (data.access_token) {
      respond('success', { token: data.access_token, provider });
    } else {
      respond('error', { error: data.error_description || data.error || 'Token exchange failed.' });
    }
  } catch (err) {
    respond('error', { error: String(err) });
  }
}
