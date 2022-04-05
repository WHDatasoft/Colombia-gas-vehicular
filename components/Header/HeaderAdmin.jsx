import Link from 'next/link'
import NavAdmin from '../Navigation/NavAdmin'

const HeaderAdmin = () => {
    return <header className="container">

        <Link href="/">
            <a>
                <img src="/logo/main-logo.webp" alt="logo colombiagas vehicular" />
            </a>
        </Link>

        <NavAdmin />

        <style jsx>{`

			header {
				box-sizing: border-box;
				top: 1rem;
				position: fixed;
				width: 100%;
				z-index: 5;
				background-color: white;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 0 2rem;
				margin-bottom: 2rem;
				box-shadow: 0 10px 15px -5px #0002;
			}

			img {
				height: 4rem;
			}

		`}</style>
    </header>
}

export default HeaderAdmin