import { auth, ConfigParams } from 'express-openid-connect';
import dotenv from 'dotenv';

dotenv.config(); // Ensure this is correctly invoked

const config: ConfigParams = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_SECRET!,
    baseURL: process.env.AUTH0_BASE_URL!,
    clientID: process.env.AUTH0_CLIENT_ID!,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL!,
};

export default auth(config);
