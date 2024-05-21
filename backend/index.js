const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
const dbPath = path.join(__dirname, "grocery_delivery_system_db.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(4001, () => {
      console.log("Server Running at http://localhost:4001/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();

//Registe_API!!!

app.post("/register", async (request, response) => {
  const { name, phone, email, password } = request.body;
  const hashedPassword = await bcrypt.hash(request.body.password, 10);
  const selectUserQuery = `SELECT * FROM user_details WHERE name = '${name}'`;
  const dbUser = await db.get(selectUserQuery);
  if (dbUser === undefined) {
    const createUserQuery = `
      INSERT INTO 
      user_details (name, phone, email, password) 
      VALUES 
        (
          
          '${name}',
          '${phone}',
          '${email}',
          '${hashedPassword}'
          
        )`;
    const dbResponse = await db.run(createUserQuery);
    const newUserId = dbResponse.lastID;
    response.send(`Created new user with ${newUserId}`);
  } else {
    response.status = 400;
    response.send("User already exists");
  }
});

//Login_API!!!!

app.post("/login", async (request, response) => {
  const { name, password } = request.body;
  const selectUserQuery = `SELECT * FROM user_details WHERE name = '${name}'`;
  const dbUser = await db.get(selectUserQuery);
  if (dbUser === undefined) {
    response.status(400);
    response.send("Invalid User");
  } else {
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password);
    if (isPasswordMatched === true) {
      response.send("Login Success!");
    } else {
      response.status(400);
      response.send("Invalid Password");
    }
  }
});

app.get("/user/", async (request, response) => {
  const getUsersQuery = `
  SELECT
    *
  FROM
  user_details
  ORDER BY
    id;`;
  const usersArray = await db.all(getUsersQuery);
  response.send(usersArray);
});


app.get("/products/", async (request, response) => {
  const getProductsQuery = `
  SELECT
    *
  FROM
  products
  ORDER BY
    product_id;`;
  const productsArray = await db.all(getProductsQuery);
  response.send(productsArray);
});



app.get("/user1/", (request, response) => {
  response.send("sudharshan");
});



//API-5 delete method
app.delete("/user/:userId/", async (request, response) => {
  const { userId } = request.params;
  const delete1query = `DELETE FROM user_details WHERE id = ${userId};`;
  const res4 = await db.run(delete1query);
  response.send("user Deleted");
});



app.post("/orders/", async (request, response) => {
  const { product_id, user_name, address } = request.body;
  
  const selectUserQuery = `SELECT * FROM user_details WHERE name = '${user_name}'`;
  const dbUser = await db.get(selectUserQuery);
  if (dbUser === undefined) {
    response.status(400);
    response.send("User Not exists");
  } else {
   
    const createOrderQuery = `
    INSERT INTO 
    orders ( product_id, user_name, address) 
    VALUES 
      (
        
        
        ${product_id},
        '${user_name}',
        '${address}'
        
      )`;
  const dbResponse = await db.run(createOrderQuery);
  const newUserId = dbResponse.lastID;
  response.send(`Created a order with ${newUserId}`);
  }
});




app.get("/orders_list/", async (request, response) => {
  const getOrdersQuery = `
  SELECT
    *
  FROM
  orders
  ORDER BY
    order_id;`;
  const ordersArray = await db.all(getOrdersQuery);
  response.send(ordersArray);
});

module.exports = app;