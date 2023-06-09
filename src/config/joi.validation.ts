import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
//   NODE_ENV: Joi.required(),
  MONGODB: Joi.required(),
  PORT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(6),
});
