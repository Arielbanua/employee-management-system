import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        
        if (!token) {
            return res.status(401).json({ message: "Authentication required" });
        }

        const decoded = jwt.verify(token, '12345');
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export const verifyAdmin = (req, res, next) => {
    if (req.userData.role !== 'admin') {
        return res.status(403).json({ message: "Admin access required" });
    }
    next();
};