import { SvelteKitAuth } from 'sk-auth';
import { GoogleOAuth2Provider } from 'sk-auth/providers';

import dotenv from 'dotenv';
dotenv.config();

export const appAuth = new SvelteKitAuth({
	providers: [
		new GoogleOAuth2Provider({
			clientId: process.env['GOOGLE_OAUTH_CLIENT_ID'],
			clientSecret: process.env['GOOGLE_OAUTH_CLIENT_SECRET'],
			profile(profile) {
				return { ...profile, provider: 'google' };
			}
		})
	],
	callbacks: {
		jwt(token, profile) {
			if (profile?.provider) {
				const { provider, ...account } = profile;
				token = {
					...token,
					user: {
						...(token.user ?? {}),
						connections: { ...(token.user?.connections ?? {}), [provider]: account }
					}
				};
			}
			return token;
		}
	},
	jwtSecret: process.env['JWT_SECRET_KEY']
});
