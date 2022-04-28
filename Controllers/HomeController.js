const Home = require("../models/home");

const addHome = async (req, res) => {
    const data = req.body;
    try {
      const newHome = await new Home(data);
      await newHome.save();
      res.send("done");
    } catch (error) {
      console.log(error);
      res.send("failed");
    }
  }

  const getAllHomes = async (req, res) => {
    try {
      const allDoc = await Home.find({});
      res.json(allDoc);
    } catch (error) {
      console.log(error);
      res.send("failed");
    }
  }

  const getSpecificHome = async (req, res) => {
    try {
      const id = req.params.id;
      const home = await Home.findById(id);
      res.json(home);
    } catch (error) {
      console.log(error);
      res.send("failed");
    }
  }

  const updateHome = async(req,res)=>{
    try {
      const id=req.params.id
      const data=req.body;
      await Home.findByIdAndUpdate({_id:id},data);
      res.send("done")
      
    } catch (error) {
      console.log(error);
      res.send("failed")
    }
  }

  const deleteHome = async (req,res)=>{
    try {
      const id=req.params.id;
      await Home.findByIdAndDelete(id)
      console.log(id)
      res.send("done")
    } catch (error) {
      console.log(error);
      res.send("failed")
    }
  }

  module.exports = {
    addHome,
    getAllHomes,
    getSpecificHome,
    updateHome,
    deleteHome
  }