module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      // headers: '*',
      // todo - comment this
      origin: [
      //   'https://vaitstony.art:1337',
      //   'https://vaitstony.art:1337/admin',
      //   'https://vaitstony.art/',
      //   'https://www.vaitstony.art/',
      //   'https://vaitstony.art/:1337',
      //   'https://www.vaitstony.art/:1337',
      //   'http://vaitstony.art:1337',
      //   'http://vaitstony.art:1337/admin',
      //   'http://localhost:1337',
        'http://localhost:3000/'
      //   'http://vaitstony.art/',
      //   'http://www.vaitstony.art/',
      ]
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

// const cors = require('cors');

// создаем express-приложение
// const app = express();

// const corsOptions = {
//   credentials: true,
//   methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//   // origin: [
//   //   'http://localhost:3000/',
//   //   'http://newsexplorer.nomoredomains.club/',
//   //   'https://newsexplorer.nomoredomains.club/',
//   //   'http://www.newsexplorer.nomoredomains.club/',
//   //   'https://www.newsexplorer.nomoredomains.club/',
//   //   'http://newsexplorer.nomoredomains.club/',
//   //   'https://vaitsehovskiy-tony.github.io/news-explorer-frontend/',
//   // ],
//   // origin: 'http://localhost:8080',
//   origin: 'https://newsexplorer.nomoredomains.club/',
// };
//
// app.use(cors(corsOptions));
