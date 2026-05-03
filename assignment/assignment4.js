const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const FILE = "./users.json";
app.post("/user", (req, res) => {
  const { name, age, email } = req.body;

  const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));

  const exists = data.find(u => u.email === email);

  if (exists) {
    return res.json({ message: "Email exists." });
  }

  const newUser = {
    id: data.length + 1,
    name,
    age,
    email
  };

  data.push(newUser);

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

  res.json({ message: "User added successfully." });
});
app.patch("/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const updates = req.body;

  const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));

  const user = data.find(u => u.id === id);

  if (!user) {
    return res.json({ message: "User ID not found." });
  }

  Object.assign(user, updates);

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

  res.json({ message: "updated successfully" });
});
app.get("/user/getByName", (req, res) => {
  const name = req.query.name;

  const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));

  const user = data.find(u => u.name === name);

  if (!user) {
    return res.json({ message: "name not found" });
  }

  res.json(user);
});
app.get("/user", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));
  res.json(data);
});
app.get("/user/:id", (req, res) => {
  const id = Number(req.params.id);

  const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));

  const user = data.find(u => u.id === id);

  if (!user) {
    return res.json({ message: "User not found." });
  }

  res.json(user);
});
app.listen(3000, () => {
  console.log("Server running...");
});

