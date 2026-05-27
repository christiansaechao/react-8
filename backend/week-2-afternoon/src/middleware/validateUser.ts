/**
 * validate a bearer token
 * -----------------------
 * header: {
 *  "authorization": `Bearer 53fsdagasdkfj309i5rjzxhajf08954jk`
 * }
 */

import type { Request, Response, NextFunction} from "express";


export const validateUser = (req:Request, res:Response, next: NextFunction) => {
    if(!req.headers.authorization) return res.status(400).send('Not Authorized')
    next();
};

export const logOut = (req:Request, res:Response, next: NextFunction) => {
  console.log(req.method);
  console.log(req.url);
  next();
};
