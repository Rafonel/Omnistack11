const connection = require("../database/connection");
module.exports = {
  async index(req, res) {
    const incidents = await connection("incidents").select("*");
    return res.json(incidents);
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;
    // Pick ID from the new Incident posted on table Incidents
    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });
    return res.json({ id });
  }
};