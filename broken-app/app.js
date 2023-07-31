const express = require("express");
let axios = require("axios");
var app = express();

app.use(express.json());

app.post("/", async function (req, res, next) {
  // try {
  //   let results = req.body.developers.map(async (d) => {
  //     return await axios
  //       .get(`https://api.github.com/users/${d}`)
  //   })
  //   // let out = await results.map((r) => ({ name: r.data.name, bio: r.data.bio }));
  //   // return res.send(JSON.stringify(out));
  // } catch (err) {
  //   next(err);
  // }

  try {
    const people = req.body.developers;
    console.log(people);

    const results = people.map(async (p) => {
      return await axios
        .get(`https://api.github.com/users/${p}`)
        .then((data) => console.log(data));
    });
  } catch (e) {
    next(e);
  }
});

app.listen(3000);
