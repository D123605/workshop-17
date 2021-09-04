module.exports = function(app) {

    var persons = require('../controllers/person.controller.js');
    app.post('/api/persons', persons.create);
    app.get('/api/persons', persons.findAll);
    app.get('/api/persons/:id', persons.findOne);
    app.put('/api/persons/:id', persons.update);
    app.delete('/api/persons/:id', persons.delete);
}