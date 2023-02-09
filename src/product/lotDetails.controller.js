const LotDetails = require("./lotDetails");
const LotDetailsRepository = require("./lotDetails.repository");

const repository = new LotDetailsRepository();

exports.create = async (req, res) => {
    const data = req.body
    const lotDetails = new LotDetail(data.lot_summary)
    lotDetails ? res.send(lotDetails) : res.status(400).send({message: "invalid lotDetails"})
};
exports.getAll = async (req, res) => {
    res.send(await repository.fetchAll())
};
exports.getById = async (req, res) => {
    const lotDetails = await repository.getById(req.query.value);
    lotDetails ? res.send(lotDetails) : res.status(404).send({message: "LotDetails not found"})
};

exports.repository = repository;
