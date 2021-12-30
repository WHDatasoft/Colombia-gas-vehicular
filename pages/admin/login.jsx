import Login from "../../components/Forms/Login"
import MainLayout from "../../layout/MainLayout"
import { useRouter } from 'next/router'

// Aws
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import { amplifyConfigAdmin, authConfigAdmin } from '../../cognito/infoAdminPool'

// Functions
import { signIn, onAppLoadLogin } from '../../cognito/authFunctions'
import { useEffect } from "react";

// Aws configure
Amplify.configure(amplifyConfigAdmin);
Auth.configure(authConfigAdmin);

const Index = () => {

	const router = useRouter()

	useEffect(() => {
		onAppLoadLogin(router)
	}, [])

	return <MainLayout className="container">

		<Login signIn={signIn} />

		<style jsx>{`

			.container {
				
			}

		`}</style>
	</MainLayout>
}

export default Index