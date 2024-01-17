const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

function auth(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("authorization header not present");
    }

    const token = authorization.replace("Bearer", "").trim();

    if (!token) {
      throw new Error("token not present");
    }

    const decodedPayload = jwt.verify(token, JWT_SECRET);

    req.user = {
      id: decodedPayload.id,
    };
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message || "unauthorized",
    });
  }

  next();
}

module.exports = auth;
