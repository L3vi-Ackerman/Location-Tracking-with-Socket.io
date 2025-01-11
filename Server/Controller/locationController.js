const Location = require('../Model/locationSchema');

const getLocation = async (req,res)=>{
    const {userId} = req.params;
    try {
        const location = await Location.find({userId}).sort({timestamp:-1});
        res.status(200).json(location);
    } catch (err) {
        console.log("Error in getLocation Middleware: ",err);
        res.status(500).json({message:"Error fetching location: ",err});
    }
}


const postLocation = async(req,res)=>{
    const {userId, latitude, longitude} = req.body;
    try {
        const newLocation = new Location({userId,latitude,longitude});
        await newLocation.save();
        res.status(201).json({message:"Location saved successfully!"});
    } catch (err) {
        console.log("Error in postLocation middleware: ",err);
        res.status(500).json({message:'Error saving location',error});
    }

};

module.exports = {getLocation,postLocation};