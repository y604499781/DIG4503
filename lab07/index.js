import Express from 'express';

const App = Express();
const port = 4503;
const names = [
  'Cortney',
  'Dewayne',
  'Trenton',
  'Pamala',
  'Ettie',
  'Errol',
  'Lorrie',
  'Hang',
  'Lauryn',
  'Caterina',
  'Isa',
  'Marcela'
];

//':person' is the route parameter
//respond with json object
App.get('/people/:person', (req, res) => {
  let person = req.params.person;
  if (names.includes(person)) {
    res.json({name: person});
  } else {
    res.json({name: "not found"});
  } 
});

//search array for name(s) contain certain letter
App.get('/search/:name', (req, res) => {
  //'filter()' returns all elements matching a testing function in an array
  //'includes()' tests if one string is found within another, returns a boolean
  const result = names.filter(str => str.includes(req.params.name));
  if (result != 0) {
    res.json({search: result});
  } else {
    res.json({search: "not found"});
  } 
});

//listens on port
App.listen(port, () => {
});