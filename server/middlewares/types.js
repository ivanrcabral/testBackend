export function middlewareTypeNumber(req, res, next) {
  if (req.query.productId) {
    // Comprobar que el parametro productId sea numero y si es asi que se ejecute next() 
    next();
  } else {
    res.status(200).send({ error: true, msg: 'invalid product id' });
  }
}