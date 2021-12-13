const mongoose = require('mongoose')
const app = require('../../app');
DB="mongodb+srv://tanmay:tanmay@cluster0.b3i3w.mongodb.net/nodedb?retryWrites=true&w=majority";
mongoose.connect(DB).then(()=>{
console.log("db connected");
}).catch(error => {
    console.log("not connected");
})


require("../modals/student")