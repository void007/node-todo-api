const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect Mongodb Server');
  }
  console.log('Connected to Mongodb server');

db.collection('Todos').insertOne({
  text:'Something to do',
  completed:false
},(err,result)=>{
  if(err){
    return console.log('Unable to insert one',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});


//
// db.collection('Users').insertOne({
//   name:'Mandeep',
//   age:21,
//   location:'pbh'
// },(err,result)=>{
//   if(err){
//   return console.log('Unable to insert user',err);
// }
// console.log(result.ops);
// });


  db.close();

});
