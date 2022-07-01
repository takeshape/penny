export const takeshapeAuthIssuer = process.env.NEXT_PUBLIC_TAKESHAPE_AUTH_ISSUER;
export const takeshapeAuthAudience = process.env.NEXT_PUBLIC_TAKESHAPE_AUTH_AUDIENCE;
export const sessionRefetchInterval = 30 * 60; // 1 hour

// Must be shorter than the 60 day customer access token
export const sessionMaxAgeRememberMe = 30 * 24 * 60 * 60; // 30 days
export const sessionMaxAgeForgetMe = 60 * 60; // 1 hour
