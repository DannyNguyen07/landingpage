const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, email, message } = req.body;

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      name,
      email,
      message,
    }),
  });

  const data = await response.json();

  res.status(200).json(data);
};
