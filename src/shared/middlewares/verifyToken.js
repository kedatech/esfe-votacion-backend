const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (req.method === "GET"){
    next()
    return;
  };
  if (req.path === "/api/votar"){
    console.log("votar")
  } 
  
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== undefined && typeof bearerHeader === 'string') {
    const token = bearerHeader.split(' ')[1];

    jwt.verify(token, "usercred", (error, authData) => {
      if (error) {
        res.status(403).json({ error: 'Token inválido' });
      } else {
        next();
      }
    });
  } else {
    res.status(403).json({ error: 'Token no proporcionado' });
  }
};

module.exports = verifyToken