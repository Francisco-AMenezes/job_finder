const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// testing route
router.get("/test", (req, res) => {
  res.send("deu certo aqui filhão!");
});

//rota de detalhes
router.get("/view/:id", (req, res) =>
  Job.findOne({
    where: { id: req.params.id },
  }).then((job) => {
    res.render("view", {
      job
    });
  }).catch(err => console.log(err))
);

//rota de envio
router.get("/add", (req, res) => {
  res.render("add");
});

//add job via post
router.post("/add", (req, res) => {
  let { title, description, salary, company, email, new_job } = req.body;

  Job.create({
    title,
    company,
    salary,
    email,
    description,
    new_job,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;
