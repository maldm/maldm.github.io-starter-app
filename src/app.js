const greeting = 'Hello World';
import JWT from 'jsonwebtoken';
console.log(JWT);
console.log(greeting);

var url = window.location.search;
var queryString = {};
console.log("MALLORY THIS IS THE JWT: ", jwt)
// from https://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
url.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function ($0, $1, $2, $3) {
      queryString[$1] = $3;
    }
);

var accounts = [
  {
    zipCode: 90210,
    id: 1,
    city: 'Beverly Hills'
  }, {
    zipCode: 27601,
    id: 2,
    city: 'Raleigh'
  }, {
    zipCode: 10001,
    id: 3,
    city: 'New York City'
  }
];

var account = accounts[Math.floor(Math.random() * accounts.length)];


const jwt = JWT.sign({
  apiKey: '7397188a-9b85-4825-5476-20de4cd4bfbe',
  account: {
    account
  },

  visitor: {
    //id: queryString.visitor || 'random@pendo',
    id: 'mal@pendo.io',
    full_name: '',
    firstName: 'MALLORY'
    //lastName: 'BAE'
  }
}, 'f6c0d63e-22ab-4f57-7bd7-6d8c3b0907c6');

(function(apiKey){
  (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
    v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
      o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
    y=e.createElement(n);y.async=!0;y.src='https://pendo-apollo-static.storage.googleapis.com/agent/static/'+apiKey+'/pendo.js';
    z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo')

  pendo.initialize({

    jwt: jwt,
    signingKeyName: 'mal_-mal_-P9MAQ'

  });
})('7397188a-9b85-4825-5476-20de4cd4bfbe');

//window.pendo.updateOptions({ jwt:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI3Mzk3MTg4YS05Yjg1LTQ4MjUtNTQ3Ni0yMGRlNGNkNGJmYmUiLCJhY2NvdW50Ijp7ImFjY291bnQiOnsiemlwQ29kZSI6Mjc2MDEsImlkIjoyLCJjaXR5IjoiUmFsZWlnaCJ9fSwidmlzaXRvciI6eyJpZCI6Im1hbGxvcnlAcGVuZG8uaW8iLCJmdWxsX25hbWUiOiIiLCJmaXJzdE5hbWUiOiJNQUxMT1JZIn0sImlhdCI6MTU4MDMyNDIyOH0.BG78vitQuXEkLgb7E82xu6WHSNxk0MfmZsVrtZZWbaA', signingKeyName: 'mal_-mal_-P9MAQ' });

