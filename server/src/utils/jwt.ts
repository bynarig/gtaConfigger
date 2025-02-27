import {JwtPayload, sign, verify} from 'jsonwebtoken';

export default {
  sign: (payload: JwtPayload) =>
    sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: process.env.JWT_EXP}),
  refresh: (payload: JwtPayload) =>
    sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: process.env.JWT_EXP_REFRESH}),
  verifyAccess: (token: string) => verify(token, process.env.JWT_ACCESS_SECRET),
  verifyRefresh: (token: string) => verify(token, process.env.JWT_ACCESS_SECRET),
};
