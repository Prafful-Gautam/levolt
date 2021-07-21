const moment = require("moment");
module.exports.AddEssay = async (req, res) => {
  try {
    const addEssay = await req.app.knexConnection("essay").insert({
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
      created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
    });
    return res
      .status(201)
      .json({ status: true, msg: "Essay created successfully" });
  } catch (error) {
    console.log(`error`, error);
    return res.status(500).json({ status: false, error });
  }
};
module.exports.GetAllEssay = async (req, res) => {
  try {
    const getAllEssay = await req.app.knexConnection("essay");
    return res.status(200).json({ status: true, getAllEssay });
  } catch (error) {
    console.log(`error`, error);
    return res.status(500).json({ status: false, error });
  }
};
module.exports.GetSingleEssay = async (req, res) => {
  try {
    const getSingleEssay = await req.app
      .knexConnection("essay")
      .where("essay_id", req.params.id);
    return res.status(200).json({ status: true, getSingleEssay });
  } catch (error) {
    console.log(`error`, error);
    return res.status(500).json({ status: false, error });
  }
};

module.exports.UpdateEssay = async (req, res) => {
  try {
    const updateEssay = await req.app
      .knexConnection("essay")
      .where("essay_id", req.params.id)
      .update({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
      });
    return res.status(200).json({ status: true, updateEssay });
  } catch (error) {
    console.log("error :>> ", error);
    return res.status(500).json({ status: false, error });
  }
};
