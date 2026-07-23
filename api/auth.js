// Simple password login for the CMS. Editors sign in with a password (CMS_PASSWORD).
// On success we hand Sveltia/Decap a pre-stored GitHub token (CMS_GITHUB_TOKEN) via the
// standard postMessage OAuth handshake — so editors never touch GitHub.
export default async function handler(req, res) {
  const PASSWORD = process.env.CMS_PASSWORD;
  const TOKEN = process.env.CMS_GITHUB_TOKEN;
  const provider = 'github';
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (!PASSWORD || !TOKEN) {
    res.statusCode = 500;
    res.end('<p style="font-family:sans-serif;text-align:center;margin-top:40px">CMS login is not configured yet. Set <b>CMS_PASSWORD</b> and <b>CMS_GITHUB_TOKEN</b> in your Vercel project’s Environment Variables, then redeploy.</p>');
    return;
  }

  const form = (err) => `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Teknoppy CMS</title></head>
<body style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;background:#f4f4f5">
  <form method="POST" style="background:#fff;padding:32px 28px;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.1);width:300px;text-align:center">
    <div style="font-weight:800;font-size:20px;color:#111;margin-bottom:2px">Teknoppy CMS</div>
    <div style="color:#999;font-size:13px;margin-bottom:18px">Enter your password to sign in</div>
    ${err ? '<div style="color:#dc2626;font-size:13px;margin-bottom:12px">Incorrect password</div>' : ''}
    <input name="password" type="password" autofocus required placeholder="Password" style="width:100%;box-sizing:border-box;padding:12px;border:1px solid #e4e4e7;border-radius:10px;font-size:15px;margin-bottom:14px" />
    <button type="submit" style="width:100%;padding:12px;background:#F05A2C;color:#fff;border:0;border-radius:10px;font-weight:700;font-size:15px;cursor:pointer">Sign in</button>
  </form>
</body></html>`;

  const success = () => {
    const payload = JSON.stringify({ token: TOKEN, provider }).replace(/</g, '\\u003c');
    return `<!doctype html><html><body><script>
(function(){
  function receive(e){
    if (window.opener) window.opener.postMessage('authorization:${provider}:success:' + '${payload}', e.origin);
    window.removeEventListener('message', receive, false);
    setTimeout(function(){ try { window.close(); } catch(_){} }, 400);
  }
  window.addEventListener('message', receive, false);
  if (window.opener) window.opener.postMessage('authorizing:${provider}', '*');
})();
</script><p style="font-family:sans-serif;text-align:center;margin-top:40px">Signed in — you can close this window.</p></body></html>`;
  };

  if ((req.method || 'GET').toUpperCase() === 'POST') {
    let password;
    if (req.body && typeof req.body === 'object') password = req.body.password;
    else if (req.body && typeof req.body === 'string') password = new URLSearchParams(req.body).get('password');
    else {
      const raw = await new Promise((resolve) => { let d = ''; req.on('data', (c) => (d += c)); req.on('end', () => resolve(d)); });
      password = new URLSearchParams(raw).get('password');
    }
    if (password === PASSWORD) { res.statusCode = 200; res.end(success()); }
    else { res.statusCode = 401; res.end(form(true)); }
    return;
  }

  res.statusCode = 200;
  res.end(form(false));
}
