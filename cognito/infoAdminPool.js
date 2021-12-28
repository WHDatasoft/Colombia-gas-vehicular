export const amplifyConfigAdmin = {
	Auth: {
		region: "us-east-1",
		userPoolId: 'us-east-1_Od9UrpK38',
		userPoolWebClientId: '2bb8u6kam2gjev4pjs0q7bs2r6',
	},
}

export const authConfigAdmin = {
	oauth: {
		domain: 'https://colombiagasvehicular.auth.us-east-1.amazoncognito.com',
		scope: ["email", "openid"],
		// we need the /autologin step in between to set the cookies properly,
		// we don't need that when signing out though
		redirectSignIn: 'http://localhost:3000/token',
		redirectSignOut: 'http://localhost:3000',
		responseType: "token",
	},
}