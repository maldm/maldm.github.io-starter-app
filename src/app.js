const greeting = 'hello from app.js';
import JWT from 'jsonwebtoken';

console.log(greeting);

const jwt = JWT.sign({
  visitor: {
    id: 'mallory@pendo.io',
    full_name: 'Mallory Brame',
    firstName: 'MALLORY',
    lastName: 'BAE'
  },
  account: {
    zipCode: 27601,
    id: 'Ral_Account_3',
    city: 'Raleigh'
  },
}, '6519ea9d-33a1-45fc-7281-d57300d2ac99');//'0e409d60-1800-43c3-7041-33c96915c502'); mal_core_only

var decodedJwt = JWT.decode(jwt)
console.log("**********************************DECODED JWT********************************** ", decodedJwt)

pendo.initialize({

  jwt: jwt,
  signingKeyName: 'mal_-sign-m-KWo'
  //signingKeyName: 'mal_-mal_-iK-5w' mal_core_only

});

//window.pendo.updateOptions({ jwt:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI3Mzk3MTg4YS05Yjg1LTQ4MjUtNTQ3Ni0yMGRlNGNkNGJmYmUiLCJhY2NvdW50Ijp7ImFjY291bnQiOnsiemlwQ29kZSI6Mjc2MDEsImlkIjoyLCJjaXR5IjoiUmFsZWlnaCJ9fSwidmlzaXRvciI6eyJpZCI6Im1hbGxvcnlAcGVuZG8uaW8iLCJmdWxsX25hbWUiOiIiLCJmaXJzdE5hbWUiOiJNQUxMT1JZIn0sImlhdCI6MTU4MDMyNDIyOH0.BG78vitQuXEkLgb7E82xu6WHSNxk0MfmZsVrtZZWbaA', signingKeyName: 'mal_-mal_-P9MAQ' });

