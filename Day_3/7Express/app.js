import express from "express";

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hi from home route");
});

app.get("/profile/:user", (req, res) => {
  res.send(`Hi ${req.params.user}, How are you?`);
});

// ejs lets you render html pages dynamically. You can pass data to the html page and render it dynamically.
app.get("/ejs", (req, res) => {
  const user = [
    {
      name: "Deep",
      age: "22",
      email: "deep@mail.com",
    },
    {
      name: "Deep2",
      age: "22",
      email: "deep2@mail.com",
    },
    {
      name: "Deep3",
      age: "22",
      email: "deep3@mail.com",
    },
    {
      name: "Deep4",
      age: "22",
      email: "deep4@mail.com",
    },
  ];
  // res.render("index", {"name": '<strong>Bold Text</strong>'})
  res.render("index", { user });
});

app.get("/about", (req, res) => {
    const name = req.query.name;
    res.send(`Hi ${name}, How are you?`);
})

app.listen(PORT, () => {
  console.log(`Server is starting at PORT: ${PORT}`);
});
