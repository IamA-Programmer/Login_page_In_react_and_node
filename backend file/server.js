const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
//const session=require("ssession");
const app=express();
app.use(cors());
app.use(express.json());
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"form"
})
// app.use(session({
//     key:"userid",
//     resave:false,
//     saveUninitialized:false,
//     secret:"userinfo",
//     cookie:{
//         expires:60*60*24,
//     },
// }))

app.post("/signup",(req,res)=>{
    const sql="INSERT INTO USER_DETAILS (`name`,`email`,`password`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error occured");
        }
        return res.json(data);
    })
})

app.post("/login",(req,res)=>{
    const sql="SELECT * FROM user_details where `email` = ? AND `password`=?";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        if(err){
            return res.json("Error occured");
        }
        if(data.length > 0){
            const name = data[0].name;
      const email = data[0].email;
     console.log(name,email);
     // res.render('Profile', { name, email })
     res.send(name,email);
            return res.json("Success");
        }
        else{
            return res.json("Failed");
        }
    })
})

app.get('/api/userData/:email', (req, res) => {
    const sql = 'SELECT * FROM user_details WHERE email = ?'; // Replace with your query
    const userEmail = req.query.email; // Get the email from the query parameters
  
    db.query(sql, [userEmail], (err, data) => {
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      if (data.length > 0) {
        res.json(data[0]); // Send the first user data row as JSON
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    });
  });

app.listen(8081,()=>{
    console.log("listening");
})

