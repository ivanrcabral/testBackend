export function middlewareTokenPass(req, res, next) {
  if (token.equals("123a45b678c")) {
    next();
    
  } else {
    res.status(200).send({ error: true, msg: 'invalid token'});
  }
}