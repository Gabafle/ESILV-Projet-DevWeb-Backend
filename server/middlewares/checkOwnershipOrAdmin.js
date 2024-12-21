module.exports = async (req, res, next) => {
    try {
      const userId = req.user.id; 
      const targetId = parseInt(req.params.id);
  
      if (req.user.role === "ADMIN" || userId === targetId) {
        console.log("Access granted: User is admin or owner of the resource.");
        return next();
      }
  
      console.log("Access denied: User is not admin and not the owner of the resource.");
      return res.status(403).json({ error: "Forbidden: You don't have access to this resource." });
    } catch (error) {
      console.error("Error in checkOwnershipOrAdmin middleware:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  