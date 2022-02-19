const { connectDb } = require("./config/databases.js");

let PersonModel = require("./models/person");
let EmailModel = require("./models/email");
// let msg = new EmailModel({
//   email: 'bechir.tabia@gmail.com'
// })
/* msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })  */

let person = new PersonModel({
  name: "TABIA",
  age: 45,
  favoriteFoods: ["Apple"],
});
person
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

const arrayOfPersons = [
  { name: "ali", age: 18, favoriteFoods: ["Banana", "Apple", "mandaline"] },
  { name: "Omar", age: 10, favoriteFoods: ["Serise", "Apple", "Barbari"] },
  { name: "Khadija", age: 14, favoriteFoods: ["Banana", "Apple", "mandaline"] },
  { name: "Salif", age: 24, favoriteFoods: ["Banana", "Apple", "mandaline"] },
];

PersonModel.create(arrayOfPersons)
  .then(() => {
    console.log(`data is saved`);
  })
  .catch(() => console.log("error "));

  

//SERACH

   const p = PersonModel.find({name:'Omar'}).then(doc => {
    console.log(p)
  })
  .catch(err => {
    console.error(err)
  })

//serach by id
PersonModel.findByIdAndDelete({ _id: "61fea234344690493dbff7d5" }).then(() =>
  console.log("deleted")
);
//Remove by id
PersonModel.remove().then(() => {
  console.log("all data are removed ");
});

//UPDATE
/* EmailModel
  .findOneAndUpdate(
    {
      email: 'ada.lovelace@gmail.com'  // search query
    }, 
    {
      email: 'theoutlander@live.com'   // field:values to update
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  }) */

//DELETE
//   EmailModel
//   .findOneAndRemove({
//     email: 'theoutlander@live.com'
//   })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.error(err)
//   }
connectDb();
