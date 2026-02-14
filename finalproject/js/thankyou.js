const params = new URLSearchParams(window.location.search);
const output = document.querySelector("#output");

const name = params.get("name");
const email = params.get("email");
const message = params.get("message");

output.innerHTML = `
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong> ${message}</p>
`;
