var mongoose = require('mongoose');
const mcurl = "mongodb+srv://srinivasaraobagam:9182189245@cluster0.1wfoe.mongodb.net/Edupoly?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mcurl)
.then(res=>console.log("Connected")).catch(err=>console.log("not connected check devoloper"));
var Student =require('./model/Students.model');
// Student.find({}).then(res=>console.log(res)).catch(err=>console.log(err));
// var newStd = new Student({name: 'Farooq sk',gender: 'male',age: 35,weight: 70})
// console.log(newStd);newStd.save();

// Student.findOne({name:"Sarah Wilson"})
// .then(res=>console.log(res)).catch(err=>console.log(err));

// Student.findOneAndUpdate( 'Farooq sk',{weight:70})
// .then(res=>console.log(res)).catch(err=>console.log(err));

// Student.findByIdAndUpdate( '6752c94be084c571781a94be',{weight:70})
// .then(res=>console.log(res)).catch(err=>console.log(err));

// Student.findByIdAndDelete( '6752d1fe6830a543fb8ad40c')
// .then(res=>console.log(res)).catch(err=>console.log(err));

// var newStd=new Student({name: 'Karthik.v', gender: 'male', age: 24, weight: 70,})
// console.log(newStd);newStd.save();
// .then(res=>console.log(res)).catch(err=>console.log(err));