var express = require("express");
var router = express.Router();
const {
    add_reaccion_dibujo,
} = require("../controllers/Reaccion_dibujo.controller");
/* GET home page. */
router.post("/add", add_reaccion_dibujo);

module.exports = router;