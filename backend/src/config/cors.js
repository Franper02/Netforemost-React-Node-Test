// Basic cors configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN_URI,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
