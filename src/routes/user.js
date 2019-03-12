import { Router } from "express";

const apiRouter = new Router();

apiRouter.get("/user", (req, res) => {
  res.json({ user: "not implemented yet" });
});

export default apiRouter;
