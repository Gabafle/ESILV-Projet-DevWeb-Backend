module.exports = async (req, res, next) => {
    if (!req.user || req.user.role !== "ADMIN") {
        return res.status(403).json({error: "Admins only."});
    }
    next();
};
  