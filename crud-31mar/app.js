const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect('mongodb://localhost:27017/testdb');

const run = async()=>{
    try {

        //Queries basic---------------------------------------------------------

        const user = await User.find({name:"nitin"});   //returns all matched object
        // const user = await User.find({age:"20"}).count();   //returns all matched object

        // const user = await User.findOne({name:"aastha"});   //returns first matched object
        // const user = await User.findById('642686fbe88223912d79c750');
        // const user = await User.findByIdAndDelete('6426d561308e3f76bfb9894c');  //returns deleted object
        // const user = await User.findByIdAndRemove('6426c4e70dafcea65f01943d');   //returns deleted object
        // const user = await User.findByIdAndRemove('6426c4e70dafcea65f01943d');   //returns deleted object
        // const user = await User.findByIdAndUpdate('6426c04fccbc5920cb715e95', { $set: { name: 'aastha panwar' }})

        // const user = await User.deleteOne({name:"prachi"});   //{ acknowledged: true, deletedCount: 1 }
        // const user = await User.deleteMany({name:"akshat"});   // { acknowledged: true, deletedCount: 25 }

        // const user = await User.findOneAndDelete('6426d561308e3f76bfb9894c');   //returns deleted object
        // const user = await User.findOneAndDelete({name:"aastha"});   //returns first matched deleted object

        // const user = await User.findOneAndRemove('6426861d3835b4440adee8a7');
        // const user = await User.findOneAndReplace({age:20},{name:"karan", age:40, email:"kar@gmail.com"});   //will replace the doc
        // const user = await User.findOneAndUpdate({name:"aastha"},{$set:{name:"prakash"}});   //will update only name field
        // const user = await User.replaceOne({name:"prakash"},{name:"nitin", age:50})   //{acknowledged: true,modifiedCount: 1,upsertedId: null,upsertedCount: 0,matchedCount: 1} 
        // const user = await User.replaceMany()
        // const user = await User.updateOne()

        // const user = await User.where("name").equals("prachi").limit(2);
        // const user = await User.count();    //140

        // const user = await User.where("name").equals("prachi").where("age").equals("22");

        // const user = await User.create({
        //     /*
        //     name:"dishi", 
        //     age:7,       //Error: User validation failed: age: Path `age` (7) is less than minimum allowed value (18).
        //     email:"dis.com",   //    email: ValidatorError: Path `email` (`dis.com`) is shorter than the minimum allowed length (10).
        //     hobbies: ["paint"],
        //     address:{
        //         street:"abc", city:"gtmpura"
        //     }
        //     */
        //     name:"akshat", 
        //     age:23,       
        //     email:"akshat@gmail.com",  //dishi@gmail.com
        //     hobbies: ["games"],
        //     address:{
        //         street:"abc", city:"gtmpura"
        //     }
        // })
        console.log(user);
        
    } catch (error) {
        console.log(error);
    }


    // const user = new User({
    //     name:"aastha", 
    //     age:20,
    //     email:"aas@gmail.com"
    // })
    // await user.save()


}
run();





// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = 7070;
// app.use(express.json());
// app.get('/', (req, res, next)=>{
//     console.log("Homepage");
// });
// app.listen(port, console.log("server is running..."));

