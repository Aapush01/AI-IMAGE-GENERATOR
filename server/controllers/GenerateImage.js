import * as dotenv from "dotenv";
import axios from "axios";
import { createError } from "../error.js";

dotenv.config();

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
       process.env.BASE_IMG_URL,
      { prompt },
      {
        headers: {
          "Content-Type": "application/json",
          "Api-Key": process.env.API_KEY,
        },
      }
    );

    const imageBase64 = response.data.image_data;

    res.status(200).json({ photo: imageBase64 });
  } catch (error) {
    next(
      createError(
        error.response?.status || 500,
        error.response?.data?.message || error.message || "Image generation failed"
      )
    );
  }
};
