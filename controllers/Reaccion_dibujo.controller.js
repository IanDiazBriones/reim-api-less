const { pool } = require("../dbcnx");
const md5 = require("md5");

const add_reaccion_dibujo = async (req, res) => {

    const {
      idreaccion,
      iddibujo,
      idusuario,
      fecha,
    } = req.body;
    await pool.query(
      `insert into reaccionxdibujo (idreaccion,iddibujo,idusuario,fecha)
           values (?, ?, ?, ?)`,
      [
        idreaccion,
        iddibujo,
        idusuario,
        fecha,
      ],
      function (error, results, fields) {
        if (error) throw error;
        res.status(200).json(results.insertId);
      }
    );
  };


module.exports = {
    add_reaccion_dibujo,
  };