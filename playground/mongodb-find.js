// const MongoClient=require('mongodb').MongoClient;
//object destrucuring
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect Mongodb Server');
  }
  console.log('Connected to Mongodb server');

//fetch
// db.collection('Todos').find({
//   _id:new ObjectID('5d009c4adc18e1d73117246d')}).toArray().then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));
//
// },(err)=>{
//   console.log('Unable to fetch todos',err);
// });

//count
db.collection('Todos').find().count().then((count)=>{
console.log(`Todos count is:${count}`);
// console.log(JSON.stringify(docs,undefined,2));

},(err)=>{
  console.log('Unable to fetch todos',err);
});











// db.collection('Todos').insertOne({
//   text:'Something to do',
//   completed:false
// },(err,result)=>{
//   if(err){
//     return console.log('Unable to insert one',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });



  //db.close();

});
