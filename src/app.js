const greeting = '*****hello from app.js';
import JWT from 'jsonwebtoken';
console.log(JWT);
console.log(greeting);

const jwt = JWT.sign({
  visitor: {
    id: 'mal@pendo.io',
    full_name: 'Mallory Brame',
    firstName: 'MALLORY',
    lastName: 'BAE'
  },
  account: {
    zipCode: 27601,
    id: 'Ral_Account_1',
    city: 'Raleigh'
  },
}, 'f6c0d63e-22ab-4f57-7bd7-6d8c3b0907c6');

pendo.initialize({

  jwt: jwt,
  signingKeyName: 'mal_-mal_-NnXw2'

});

//window.pendo.updateOptions({ jwt:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI3Mzk3MTg4YS05Yjg1LTQ4MjUtNTQ3Ni0yMGRlNGNkNGJmYmUiLCJhY2NvdW50Ijp7ImFjY291bnQiOnsiemlwQ29kZSI6Mjc2MDEsImlkIjoyLCJjaXR5IjoiUmFsZWlnaCJ9fSwidmlzaXRvciI6eyJpZCI6Im1hbGxvcnlAcGVuZG8uaW8iLCJmdWxsX25hbWUiOiIiLCJmaXJzdE5hbWUiOiJNQUxMT1JZIn0sImlhdCI6MTU4MDMyNDIyOH0.BG78vitQuXEkLgb7E82xu6WHSNxk0MfmZsVrtZZWbaA', signingKeyName: 'mal_-mal_-P9MAQ' });

