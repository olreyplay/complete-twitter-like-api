// Middleware to validate post data
function validatePostData(req, res, next) {
  const { username, postTitle, postContent } = req.body;

  if (!username || !postTitle || !postContent) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // If data is valid, proceed to the next route handler
  next();
}

module.exports = validatePostData;
