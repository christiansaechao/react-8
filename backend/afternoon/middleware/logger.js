export default function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}


/**
 * 
 * headers: {
 *  "authorization": `Bearer ${token}`
 * }
 * role based access
 * authority based accesss
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const generateToken = () => {
    const generatedToken = jwt.generate("secret key");
    return generatedToken;
}

export const authenticateUser = (req, res, next) => {
    const bearerToken = req.headers["authorization"];

    if (!bearerToken) return res.send("no token given")

    const token = bearerToken.split(" ")[1];
    jwt.validate(token);
    
    req.token = token;
    next();
}