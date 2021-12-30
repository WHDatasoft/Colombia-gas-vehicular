import { useEffect } from "react"
import { onAppLoad } from "../cognito/authFunctions"
import HeaderAdmin from "../components/Header/HeaderAdmin"
import { useRouter } from 'next/router'

const AdminLayout = ({ children }) => {

	const router = useRouter()

	useEffect(() => {
		onAppLoad(router)
	}, [])

	return <div className="container">

		<HeaderAdmin />

		{
			children
		}

		<style jsx>{`

			.container {
				position: relative;
				box-sizing: border-box;
				padding-top: 7rem;
				min-height: 100vh;
				overflow: hidden;
				
				background: rgb(6,132,55);
				background: linear-gradient(180deg, var(--dark-green) 0%, var(--light-green) 100%);
			}


		`}</style>
	</div>
}

export default AdminLayout