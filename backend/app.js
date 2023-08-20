const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.set("trust proxy", 1); // trust first proxy

app.use(cookieParser());
app.use(cors());

app.get("/set-cookie", (req, res, next) => {
  res.cookie("test", "test");
  res.json({
    success: true,
  });
});

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});
