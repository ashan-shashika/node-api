import express from "express";
import route from "./routes/user";

const port = Number(process.env.PORT) || 5000;
const app = express();

app.get("/", (req, res) => res.send("SFRhub node api"));

app.use("/api/v2/", route);

// ***** Error handling *****

// 404- Unknown api
// eslint-disable-next-line no-unused-vars
app.use(function(req, res, next) {
  return res.status(404).json({
    message: `Route ${req.method.toUpperCase()} ${req.originalUrl} Not found.`
  });
});

// 500 - Any server error
// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});

/* eslint-disable no-console */
app.listen(port, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(`node api is running on 127.0.0.1:${port}`);
  }
});
