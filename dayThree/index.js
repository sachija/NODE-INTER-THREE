const express=require("express")
const app= express()
const cors=require("cors")
const port=3000;
const { add, multi, divide, sub } = require("./module.js"); 
const MyComponent= require("./default.js")
const MyComponent1=require("./default.js")
// import the modules from module.js
app.use(cors());


console.log(add(1, 5));
console.log(multi(1, 5));
console.log(divide(1, 5));
console.log(sub(15, 5));
console.log(MyComponent(2,3))
console.log(MyComponent1(3,3));

const globalMid = (req, res, next) => {
  console.log(" global middleware ");
  next();
};

app.use(globalMid);

app.get("/", (req, res) => {
    res.send("Home page");
    res.end();
  });
  app.get("/about", (req, res) => {
    res.send(" this is About page");
    res.end();
  });
  
  app.listen(port, () => {
    console.log(`Connected to Port ${port}`);
  })