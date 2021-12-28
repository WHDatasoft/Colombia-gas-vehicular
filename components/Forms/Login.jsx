import { useState } from "react"
import { useRouter } from 'next/router'

const Login = ({ signIn }) => {

	const router = useRouter()
	const [loginData, setloginData] = useState({})

	const onChange = e => {
		setloginData(
			Object.assign({}, loginData, { [e.target.name]: e.target.value })
		)
	}

	return <div className="form-wrapper">

		<form onSubmit={e => signIn(e, loginData, router)}>
			<img src="/icon/user-icon.svg" alt="" />
			<h1>Ingreso Admin</h1>
			<input onChange={onChange} type="text" placeholder="Email" name="email" />
			<input onChange={onChange} type="password" placeholder="Contraseña" name="password" />
			<button>Ingresar</button>

		</form>
		<style jsx>{`

			.form-wrapper {
				display: grid;
				place-items: center;
				height: calc(100vh - 9rem);
			}

			form {
				position: relative;
				display: grid;
				background-color: var(--orange);
				padding: 2rem;
				justify-items: center;
				gap: 1rem;
				border-radius: .3rem;
			}

			h1 {
				color: white;
				font-size: 1.5rem;
			}

			img {
				height: 7rem;
			}

			button {
				padding: .5rem 1rem;
				background-color: white;	
				border-radius: .3rem;
			}

			input {
				padding: .5rem 1rem;
				width: 18rem;
				text-align: center;
				border-radius: .3rem;
			}

		`}</style>
	</div>
}

export default Login