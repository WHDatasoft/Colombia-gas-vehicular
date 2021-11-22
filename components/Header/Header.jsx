import Link from 'next/link'
import Nav from "../Navigation/Nav"

const Header = () => {
	return <header>
		<Link href="/">
			<a>
				<img src="/logo/main-logo.png" alt="logo colombiagas vehicular" />
			</a>
		</Link>
		<Nav />

		<style jsx>{`

			header {
				position: relative;
				z-index: 5;
				background-color: white;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 0 2rem;
				margin-bottom: 2rem;
			}

			img {
				height: 4rem;
			}

		`}</style>
	</header>
}

export default Header