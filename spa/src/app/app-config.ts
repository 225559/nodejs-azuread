// Tested issuers:
// Azure AD: https://login.microsoftonline.com/TENANT_ID/v2.0
// Ping ID: https://auth.pingone.eu/TENANT_ID/as

import { AuthConfig } from 'angular-oauth2-oidc';

const CLIENT_ID = '';
const TENANT_ID = '';
const ISSUER = '';

export const authConfig: AuthConfig = {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'http://localhost:4200',
    responseType: 'code',
    scope: 'openid profile',
    showDebugInformation: true,
    strictDiscoveryDocumentValidation: false,
};
