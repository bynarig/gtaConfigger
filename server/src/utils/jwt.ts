import JWT, {JwtPayload} from 'jsonwebtoken';

export default {
  sign: (payload: JwtPayload) =>
    JWT.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: process.env.JWT_EXP}),
  refresh: (payload: JwtPayload) =>
    JWT.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: process.env.JWT_EXP_REFRESH}),
  verifyAccess: (token: string) => JWT.verify(token, process.env.JWT_ACCESS_SECRET),
  verifyRefresh: (token: string) => JWT.verify(token, process.env.JWT_ACCESS_SECRET),
};
