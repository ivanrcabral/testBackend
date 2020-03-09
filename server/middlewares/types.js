export function middlewareTypeNumber(req, res, next) {
  var countNumber;
  if (req.query.productId) {
    // Comprobar que el parametro productId sea numero y si es asi que se ejecute next() 
    
    for(var i=0;i<productId.length;i++){
    	if(productId.charAt(i)==="1" || productId.charAt(i)==="2" ||
    		productId.charAt(i)==="3" || productId.charAt(i)==="4" ||
    		productId.charAt(i)==="5" || productId.charAt(i)==="6" ||
    		productId.charAt(i)==="7" || productId.charAt(i)==="8" ||
    		productId.charAt(i)==="9" || productId.charAt(i)==="0"){
    		countNumber+=1;
    	}
    }
    if(countNumber===productId.length){
    	next();
    }
  } else {
    res.status(200).send({ error: true, msg: 'invalid product id'});
  }
}