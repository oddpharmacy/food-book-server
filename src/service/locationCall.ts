import { Request, Response } from "express";
import axios from "axios";

const locationCall = async (req: Request, res: Response) => {
  console.log("location call");
  try {
    const { latitude, longitude } = req.body;
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.OPENCAGE_API}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(404).send("API Location call unsuccessful");
  }
};

export default locationCall;
