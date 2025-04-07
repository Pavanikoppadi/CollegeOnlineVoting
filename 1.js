// const express=require("express")
// const mysql = require("mysql")
// const bodyparser=require('body-parser')
// var cors = require('cors')
// const app=express()
// app.use(bodyparser.json())
// app.use(cors())
// const db=mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"student",
//     connectionlimit:10
// })
// db.getConnection((err,connection)=>{
//     if (err) throw err
//     console.log("success")

// });

// //LOGIN
// app.post('/', (req, res) => {
//     const { username, password } = req.body;
//     const query = 'SELECT * FROM users WHERE REGNO = ? AND PASSWORD = ?';
//     db.query(query, [username, password], (err, results) => {
//       if (err) {
//         console.error('Database query error:', err);
//         res.status(500).json({ message: 'Error logging in' });
//       } else if (results.length === 0) {
//         res.status(401).json({ message: 'Invalid credentials' });
//       } else {
//         res.status(200).json({ message: 'Logged in successfully' });
//       }
//     });
//   });


// //ADMINLOGIN
// app.post('/admin', (req, res) => {
//   const { u, p } = req.body;
//   const query = 'SELECT * FROM admin WHERE ID = ? AND PASSWORD = ?';
//   db.query(query, [u,p], (err, results) => {
//     if (err) {
//       console.error('Database query error:', err);
//       res.status(500).json({ message: 'Error logging in' });
//     } else if (results.length === 0) {
//       res.status(401).json({ message: 'Invalid credentials' });
//     } else {
//       res.status(200).json({ message: 'Logged in successfully' });
//     }
//   });
// });


// //VIEW FRONTDETAILS
// app.get('/user', (req, res) => {
//     const username = req.query.REGNO;
//     console.log("hello",username);
//     const query = 'SELECT * FROM users where REGNO=?';
//     db.query(query, [username],(err, results) => {
//       if (err) {
//         console.error('Database query error:', err);
//         res.status(500).json({ message: 'Error fetching user information' });
//       } else if (results.length === 0) {
//         res.status(404).json({ message: 'User not found' });
//       } else {
//         const userInfo = results[0];
//         res.status(200).json(userInfo);
//       }
//     });
//   });
  
// //PARTICIPANTFORM  
// app.post('/submit-form', (req, res) => {
//   const { NAME, REGNO, SKILLS, HIGHLIGHTS, PHOTO } = req.body;
// console.log(NAME);
//   // Insert data into the "participants" table
//   const sql = 'INSERT INTO nominee (NAME, REGNO, SKILLS, HIGHLIGHTS, PHOTO) VALUES (?, ?, ?, ?, ?)';
//   db.query(sql, [NAME, REGNO, SKILLS, HIGHLIGHTS, PHOTO], (err, result) => {
//     if (err) {
//       // console.error(Error inserting data:', err);
//       res.status(500).json({ message: 'Error inserting data' });
//     } else {
//       console.log('Data inserted:', result);
//       res.json({ message: 'Data inserted successfully' });
//     }
//   });
// });



// //SHOW TO VOTERS
// app.get('/candidates', (req, res) => {
//   // Assuming you have a MySQL database connection named "db" already established
//   const sql = 'SELECT * FROM nominee';

//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error('Error fetching participants:', err);
//       res.status(500).json({ message: 'Error fetching participants' });
//     } else {
//       res.json(result);
//     }
//   });
// });

 
// //UPDATE VOTE`
// app.post('/vote', (req, res) => {
//   const { REGNO } = req.body;

//   // Update the vote count for the candidate with the given regno
//   const query = `UPDATE candidates SET VOTES = VOTES + 1 WHERE REGNO = ?`;

//   db.query(query, [REGNO], (error, results) => {
//     if (error) {
//       console.error('Error updating vote:', error);
//       return res.status(500).json({ message: 'Error updating vote' });
//     }

//     console.log('Vote updated successfully');
//     res.json({ message: 'Vote updated successfully' });
//   });
// });

// //RESULTS
// // Fetch the top 3 candidates with the highest votes
// app.get('/top-candidates', (req, res) => {
//   const sql = 'SELECT NAME, VOTES FROM candidates ORDER BY VOTES DESC LIMIT 3';

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error('Error fetching top candidates:', err);
//       res.status(500).json({ message: 'Error fetching top candidates' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.listen(520,(req,res)=>{
//     console.log("server started")
// })

const express=require("express")
const mysql = require("mysql")
const bodyparser=require('body-parser')
var cors = require('cors')
const app=express()
app.use(bodyparser.json())
app.use(cors())
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"student",
    connectionlimit:10
})
db.getConnection((err,connection)=>{
    if (err) throw err
    console.log("success")

})


//LOGIN
app.post('/', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE REGNO = ? AND PASSWORD = ?';
    db.query(query, [username, password], (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ message: 'Error logging in' });
      } else if (results.length === 0) {
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        res.status(200).json({ message: 'Logged in successfully' });
      }
    });
  });


  //ADMINLOGIN
app.post('/admin', (req, res) => {
  const { u, p } = req.body;
  const query = 'SELECT * FROM admin WHERE ID = ? AND PASSWORD = ?';
  db.query(query, [u,p], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ message: 'Error logging in' });
    } else if (results.length === 0) {
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      res.status(200).json({ message: 'Logged in successfully' });
    }
  });
});


//VIEW FRONTDETAILS
app.get('/user', (req, res) => {
    const username = req.query.REGNO;
    console.log("hello",username);
    const query = 'SELECT * FROM users where REGNO=?';
    db.query(query, [username],(err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ message: 'Error fetching user information' });
      } else if (results.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        const userInfo = results[0];
        res.status(200).json(userInfo);
      }
    });
  });
  
//PARTICIPANTFORM  
  app.post('/submit-form', (req, res) => {
    const { NAME,REGNO,SKILLS,HIGHLIGHTS,PHOTO } = req.body;
  
    // Insert data into the "participants" table
    const sql = 'INSERT INTO participants (NAME,REGNO,SKILLS,HIGHLIGHTS,PHOTO) VALUES (?, ?,?,?,?)';
    db.query(sql, [NAME,REGNO,SKILLS,HIGHLIGHTS,PHOTO], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ message: 'Error inserting data' });
      } else {
        console.log('Data inserted:', result);
        res.json({ message: 'Data inserted successfully' });
      }
    });
  });



//SHOW TO VOTERS
app.get('/candidates', (req, res) => {
  // Assuming you have a MySQL database connection named "db" already established
  const sql = 'SELECT * FROM participants';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching participants:', err);
      res.status(500).json({ message: 'Error fetching participants' });
    } else {
      res.json(result);
    }
  });
});

 
//UPDATE VOTE`
app.post('/vote', (req, res) => {
  const { REGNO } = req.body;

  // Update the vote count for the candidate with the given regno
  const query = `UPDATE candidates SET VOTES = VOTES + 1 WHERE REGNO = ?`;

  db.query(query, [REGNO], (error, results) => {
    if (error) {
      console.error('Error updating vote:', error);
      return res.status(500).json({ message: 'Error updating vote' });
    }

    console.log('Vote updated successfully');
    res.json({ message: 'Vote updated successfully' });
  });
});

//RESULTS
// Fetch the top 3 candidates with the highest votes
app.get('/top-candidates', (req, res) => {
  const sql = 'SELECT NAME, VOTES FROM candidates ORDER BY VOTES DESC LIMIT 3';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching top candidates:', err);
      res.status(500).json({ message: 'Error fetching top candidates' });
    } else {
      res.json(results);
    }
  });
});



app.listen(520,(req,res)=>{
    console.log("server started")
})
