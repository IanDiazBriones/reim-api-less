const { pool } = require("../dbcnx");
const md5 = require("md5");

const get_dibujo_reim = async (req, res) => {
  const id = req.params.id;
  await pool.query(
    `SELECT id_dibujo_reim, 
            usuario_id,
            imagen
      FROM dibujo_reim
      WHERE  reim_id = ?
	    LIMIT 20
    `,
     [id],
     function (error, results, fields) {
      if (error) throw error;
      if (results.length > 0) {
        const Resp = results;
        res.status(200).json(Resp);
      } else {
        res.status(404).json(null);
      }
    }
  );
};

module.exports = {
  get_dibujo_reim,
};