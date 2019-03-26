const User = require("../models/User");
const Restaurant = require("../models/Restaurant");
const Event = require("../models/Event");

module.exports = function(app) {

  // Restaurant Model Routes
  // Get Route for viewing the restaurants

  app.get("/api/restaurant", function(req, res) {
    Restaurant.find({})
      .then(function(dbRestaurant) {
        res.json(dbRestaurant);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.get("/api/restaurant/:name", function(req, res) {
    Restaurant.find({name: req.body.name})
      .then(function(dbRestaurant) {
        res.json(dbRestaurant);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Event Model Route
  // Get Route for viewing the Events

  app.get("/api/event", function(req, res) {
    Event.find({})
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.post("/api/event", function(req, res) {
    const userId = req.body.id;
    const newEvent = {
      body: req.body.body
    };

    Event.create(newEvent)
      .then(function(eventData) {
        return User.findOneAndUpdate(
          { _id: userId },
          { $push: { favorites: eventData._id } },
          { new: true }
        );
      })
      .then(function(userData) {
        res.json(userData);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // User Model Routes
  // Get Route to get user information (temporarily so that we can test)
  // and which restaurants they are saving

  app.get("/api/user", function(req, res) {
    User.find({})
      .populate("favorites")
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.post("/api/user", function(req, res) {
    const newUser = {
      email: req.body.email,
      password: req.body.password
    };

    User.create(newUser)
      .then(function(userData) {
        res.json(userData);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Protected Routes

  app.post("/api/authenticate", function(req, res) {
    const { username, password } = req.body;
    User.findOne({ username: username })
      .then(function(user) {
        const isValidPass = user.comparePassword(password);
        if (isValidPass) {
          // NOTE: the secret should ultimately come from an environment variable and not be hard coded into the site
          const token = jwt.sign({ data: user.id }, "superSecretKey");
          res.json({
            id: user.id,
            username: user.username,
            token: token
          });
        } else {
          res.status(404).json({ message: "Incorrect username or password." });
        }
      })
      .catch(function(err) {
        res.status(404).json({ message: "Incorrect username or password." });
      });
  });

  app.post("/api/signup", function(req, res) {
    const userData = {
      username: req.body.username,
      password: req.body.password
    };

    User.create(userData).then(function(dbUser) {
      res.json({ success: true });
    });
  });
};
