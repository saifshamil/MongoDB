MongoDB :-

1- show all db

show dbs

2- for db select & switch or create

use test

3- show all collections (table Alternate obj)

show collections

4- to create collections

db.createCollection('students')

5- for delete collections

db.collectionName.drop()

6- to reName collection

db.collectionName.renameCollection('collectionName')

7- to insert data in collection

db.collectionName.insertOne({
_id:1001,    
name : "kashif",
age : 23,
roll : 34,
city : "Islamabad",
course : "java"
})

7- to insert Multiple data in collection

db.collectionName.insertMany([
{

    name : "asif",
    age : 22,
    roll : 33,
    city : "LHR",
    course : "PERN"

},
{
name : "arif",
age : 11,
roll : 22,
city : "punjab",
course : "Php"
}
])

8- to Read data (collections)

db.collectionName.find()

9- condition searching

  by name
  db.collectionName.find({name:"saif"})

  by two conditions &&

    db.collectionName.find({
        name:"saif",
        course:'MERN'
        })

10- by comparision Operators:-

 $eq :- Equal to
 $ne :- not equal
 $gt :- greater than
 $gte :- greater than or Equal 
 $lt :- Less Than
 $lte :- Less Than or Equal
 $in :- anyone from the given Values

 db.students.find({age:{$gt:22}})

11- Logical Operator:-

  $and
  $or
  $not
  $nor

   db.students.find({
      $and:[
        {age:{$gt:22}},
        {city:"khi"}
      ]
   })

12- Update:-

 updateOne :- 

db.students.updateOne(
  {name:"saif"},
  {$set:{name:"shamil"}}
)

 updateMany :- 

db.students.updateMany()

13- felied Delete :-

  db.students.updateOne(
    {name : "shamil"},
    {$unset:{city:""}}
  )

  14- Document Delete
  
  db.students.deleteOne(
    {name:"asif"}
  )