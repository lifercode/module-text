const cors = require('cors')
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors())

app.post("/text", async (req, res) => {
  res.json({
    text: req?.body?.inputsData?.text || ''
  })
});

app.listen(7777, () => {
    console.log("server started on port 7777");
});
