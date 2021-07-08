var express = require("express");
var router = express.Router();
const {
    //put_dibujo_reim,
    get_dibujo_reim,
} = require("../controllers/Dibujo_reim.controller");
/* GET home page. */
//router.post("/add", put_dibujo_reim);
router.post("/get/:id", get_dibujo_reim);

module.exports = router;