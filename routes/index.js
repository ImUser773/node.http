var express = require("express");
var router = express.Router();

router.get("/get", (req, res)=> {
  var input = req.query || {};
  console.log(input);
  var data = {
    'message': input.message
  };

  res.json(data);
});

router.post("/post", (req, res)=> {
  var input = req.body || {};
  console.log(input);

  var data = {
    'message': input.message
  };

  res.json(data);
});

router.put("/put", (req, res)=> {
  var input = req.body || {};
  console.log(input);
  var data = {
    'message': input.message
  };

  res.json(data);
});

router.delete("/delete", (req, res)=> {
  var input = req.body || {};
  console.log(input);
  var data = {
    'message': input.message
  };

  res.json(data);
});


module.exports = router;
