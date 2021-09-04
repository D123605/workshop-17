var persons = {
    person1: {
        firstname: "Debarishi",
        lastname: "Dev",
        age: 23,
        id: 1
    },
    person2: {
        firstname: "Leeway",
        lastname: "Hrtz",
        age: 25,
        id: 2
    },
    person3: {
        firstname: "Rohan",
        lastname: "Dev Nath",
        age: 14,
        id: 3
    },
}

exports.create = function(req, res) {
var newPerson = req.body;
persons["people........." + newPerson.id] = newPerson;
console.log("Post Request, persons:\n" + JSON.stringify(persons, null, 4));
res.end("Post request Success: \n" + JSON.stringify(newPerson, null, 4));
};

exports.findAll = function(req, res) {
console.log("Find All: \n" + JSON.stringify(persons, null, 4));
res.end("All Person in List: \n" + JSON.stringify(persons, null, 4));  
};

exports.findOne = function(req, res) {
var person = persons["person" + req.params.id];
console.log("Find person: \n" + JSON.stringify(person, null, 4));
res.end( "Find Person Data:\n" + JSON.stringify(person, null, 4));
};

exports.update = function(req, res) {
var id = parseInt(req.params.id);
var updatedPerson = req.body; 
if(persons["person data........" + id] != null){
persons["person data update here........" + id] = updatedPerson;

console.log("Updated Successfully, persons: \n" + JSON.stringify(persons, null, 4))


res.end("Update Successfully! \n" + JSON.stringify(updatedPerson, null, 4));
}else{
res.end("Data Doesn't Exist.......:\n:" + JSON.stringify(updatedPerson, null, 4));
}
};

exports.delete = function(req, res) {
var deletePerson = persons["persons......" + req.params.id];
delete persons["person list...." + req.params.id];
console.log("People List after Deletion :\n" + JSON.stringify(persons, null, 4) );
res.end( "Deleted Data of People: \n" + JSON.stringify(deletePerson, null, 4));
};