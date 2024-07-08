const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");
const reviewsRouter = require("../reviews/reviews.router");
const theatersRouter = require("../theaters/theaters.router");

// TODO: Add your routes here
// Route for reading a single movie by ID
router
  .route("/:movieId")
  .get(controller.read)
  .all(methodNotAllowed);

// Route for listing movies
router
  .route("/")
  .get(controller.list)
  .all(methodNotAllowed);


// Nested routes for reviews and theaters
router.use("/:movieId/reviews", reviewsRouter);
router.use("/:movieId/theaters", theatersRouter);


// Catch-all route handler for undefined routes
router.all("*", (req, res, next) => {
  res.status(404).json({ error: "Not found." });
});
module.exports = router;

