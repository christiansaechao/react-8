/**
 * Request
 * Middleware authentication make sure the user is signed in and we have them in the database next()
 * Middleware request which endpoint we're trying to get next()
 * Response
 */

export default function Logger(req, res, next) {
  console.log({ method: req.method, url: req.url });
  next();
}

/**
 * Before Logged In
 * we have no token, only access public routes
 * 
 * After Logged In / On Log In
 *  - issued a jwt 
 *  - user information userId, name, email (coming from the database)
 * 
 *  
 * Good Path
 *  - user is logged
 *  - on request / any request they send from the frontend (authentication token)
 */

// req => all food

// axios. headers, request configs

// from the frontend
// header: {
//     content-type: "application/json",
//     authorization: "Bearer " + token
// }

// okta, oAuth, Auth 2.0 (3rd party signins)
// we tell which provider -> google -> google handles the login part

export const authenticateUser = (req, res, next) => {
  // authorization/jwt: askdfjoix984-kjkdj8187 - we give them this token when they sign in
  // userId: uihx834-09331
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).send("not logged in go sign in");
  }

  const { user, error } = db.validateDbUser(userId);

  function validateDbUser(userId) {
    const user = dbCall(userid); //

    // users table
    // if we find the user return it
  }

  if (!user || error) {
    return res.status(400).send("no user exists");
  }

  req.good = authHeader;

  next();
};
