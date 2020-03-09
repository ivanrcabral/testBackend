import express from "express"
import { middlewareTypeNumber } from './middlewares/types'
import { middlewareTokenPass } from './middlewares/authToken'
let router = express.Router();

const product = {
  title: 'Nike',
  image: 'https://s3.amazonaws.com/nikeinc/assets/86098/AM180-BLN-02_square_1600.jpg',
  price: 1200,
  description: 'Description Nike, Description Nike, Description Nike',
  timeDate: new Date().getTime,
  tokenPass: "123a45b678c"
}

/* 
* for add more middlewares
* example router.get('/getProduct', [middlewareTypeNumber, ...], (req, res) => {
*/
router.get('/getProduct', [middlewareTypeNumber, middlewareTokenPass], (req, res) => {
  res.status(200).send({ error: false, product });
});

export default router
