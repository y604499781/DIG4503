//throws ESM error, fixed with updating node js version
import Express from 'express';

const App = Express();
const port = 3001;

//parameter defined by ':'
//access "id" via 'req.params.id'
App.get('/users/:id', (req, res) => {
  res.send("The requested user ID is: " + req.params.id);
});

//respond with json object
App.get('/names/:fname', (req, res) => {
  res.json({firstname: req.params.fname});
});

//listens on port
App.listen(port, () => {
});