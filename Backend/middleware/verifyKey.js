import { config } from "dotenv";
config();

const verifyKey = (req, res, next) => {
  const apiKey = req.headers["api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res
      .status(401)
      .json({ status: "failed", message: "invalid API key." });
  }

  next();
};

export default verifyKey;
