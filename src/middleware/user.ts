import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default {
  async CreateUserMiddle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      password: Joi.string().min(6).required(),
    });
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });
    if (error?.message) {
      res.status(400).json({
        error: `Validation error: ${error.details
          .map((error) => error.message)
          .join(", ")}`,
      });
    } else {
      next();
    }
  },
};
