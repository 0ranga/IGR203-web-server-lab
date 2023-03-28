// imports
import fs from 'fs';
import express from 'express';
import exphbs from 'express-handlebars';

// express server
const app = express();
let micropubs = "";

// reading the json file and converting to a js obj
fs.readFile("./micropubs.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    micropubs = JSON.parse(data);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;

// get requests
app.get('/', (req, res) => {
  res.render('test', {label: "it still works!"});
});

app.get('/micropub', (req, res) => {
    if (req.query.id) {
      const currentMicropub = micropubs.find(el => el.id == req.query.id);
      if(!currentMicropub){
        res.status(404).render('404');
      } else {
        res.render('micropub', currentMicropub);
      }
    } else {
      res.json(micropubs);
    }
});

app.get('/micropubs', (req, res) => {
  micropubs.sort((a, b) => {
    let d1 = new Date(a.fullDate);
    let d2 = new Date(b.fullDate);
    return d2 - d1;
  });
  res.render('micropubs', {micropub: micropubs});
});

app.get('/micropub/new', (req, res) => {
  res.render('newMicropub');
});


// post requests
app.post('/micropub', (req, res) => {
    let data = req.body;

    console.log(data);

    let date = new Date();
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - (offset*60*1000));
    data.fullDate = date;
    data.creationDate = date.toISOString().split('T')[0];
    data.id = micropubs.length + 1;
    micropubs.push(data);

    const micropubsJSON = JSON.stringify(micropubs);
    fs.writeFile('./micropubs.json', micropubsJSON, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });

    res.redirect('/micropubs');

});

// server start
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
