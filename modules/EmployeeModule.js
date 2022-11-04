const mongo = require("../connect");
const { ObjectId } = require("mongodb");

module.exports.getEmployees = async (req, res, next) => {
  try {
    const employeeData = await mongo.selectedDb
      .collection("employees")
      .find()
      .toArray();
    res.send(employeeData);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err });
  }
};

module.exports.updateEmployee = async (req, res, next) => {
  const id = req.params.employeeId;
  const updatedData = await mongo.selectedDb
    .collection("employees")
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { ...req.body.employee } },
      { returnDocument: "after" }
    );
  res.send(updatedData);
};

module.exports.createEmployee = async (req, res, next) => {
  console.log(req.body);
  try {
    const insertedResponse = await mongo.selectedDb
      .collection("employees")
      .insertOne({ ...req.body.employee });
    res.send(insertedResponse);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err });
  }
};

module.exports.deleteEmployee = async (req, res, next) => {
  const id = req.params.deleteId;
  const deletedResponse = await mongo.selectedDb
    .collection("employees")
    .remove({ _id: ObjectId(id) });
  res.send(deletedResponse);
};
