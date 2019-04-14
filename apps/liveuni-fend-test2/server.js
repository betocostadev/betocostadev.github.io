const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser());
app.use(express.static(`${__dirname}/public/`));
app.use(cors());
console.log(`${__dirname}`);

app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
//   response.render('index');
  response.render('index', {
    opt: 'Option',
    qtd: 'Quantity',
    items: [
      { value: 'itemA', text: 'Item A' },
      { value: 'itemB', text: 'Item B' },
    ],
  });
//   response.render('index', { alias: 'beto' });
});
// app.get('/', (request, response) => {
//   response.render('index', {
//     foo: 'bar',
//     people: [
//       { name: 'beto' },
//       { name: 'carol' },
//     ],
//   });
// });

app.listen(8000, () => {
  console.log('Heard on 8000');
});
