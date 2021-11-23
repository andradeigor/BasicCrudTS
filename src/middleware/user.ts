import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default {
  async CreateUserMiddle(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });
    const options = {
      abortEarly: false,
    };
    const { error } = schema.validate(req.body, options);
    if (error) {
      res.status(400).json({
        error: `Validation error: ${error.details
          .map((error) => error.message)
          .join(", ")}`,
      });
    } else {
      next();
    }
  },
  async GetUserMiddle(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    let isValid: boolean = true;
    if (id.length < 8) isValid = false;

    if (!isValid) {
      res.status(400).json({
        error: "Id not valid!",
      });
    } else {
      next();
    }
  },
  async PutUserMiddle(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    let isValid: boolean = true;
    if (id.length < 8) isValid = false;
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
    });
    const options = {
      abortEarly: false,
    };
    const { error } = schema.validate(req.body, options);
    if (error || !isValid) {
      res.status(400).json({
        error: `Validation error: ${error?.details
          .map((error) => error.message)
          .join(", ")}`,
      });
    } else {
      next();
    }
  },
};
