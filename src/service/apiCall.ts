import { Request, Response } from "express";
import axios from "axios";

const apiCall = async (req: Request, res: Response) => {
  console.log("apicall");
  try {
    const { keyword, latitude, longitude } = req.body;

    if (latitude && longitude) {
      const results = await axios.get(
        "https://api.yelp.com/v3/businesses/search",
        {
          params: {
            term: keyword,
            categories: "restaurants",
            latitude,
            longitude,
          },
          headers: {
            Authorization: `Bearer ${process.env.YELP_FUSION_API}`,
          },
        }
      );
      console.log(results.data);
      res.json(results.data);
    } else {
      const results = await axios.get(
        "https://api.yelp.com/v3/businesses/search",
        {
          params: {
            term: keyword,
          },
          headers: {
            Authorization: `Bearer ${process.env.YELP_FUSION_API}`,
          },
        }
      );
      res.status(200).json(results.data);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("API call unsuccessful");
  }
};

export default apiCall;
