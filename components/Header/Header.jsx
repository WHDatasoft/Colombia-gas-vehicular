import Link from 'next/link'
import { useState } from 'react'
import Nav from "../Navigation/Nav"

const Header = () => {

    const [enableNav, setEnableNav] = useState(false);

    return <header>
        <Link href="/">
            <a>
                <img src="/logo/main-logo.webp" alt="logo colombiagas vehicular" />
            </a>
        </Link>
        <button className="open" onClick={() => setEnableNav(true)}>
            <svg viewBox="0 0 448 512">
                <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>
        </button>
        <Nav
            setEnableNav={setEnableNav}
            enableNav={enableNav}
        />

        <style jsx>{`

			.open {
				display: none;
			}

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

			@media screen and (max-width: 1080px) {
				.open {
					align-self: center;
					display: block;
					box-sizing: border-box;
					padding: .5rem;
					color: var(--dark-green);
					height: 100%;
					background-color: unset;
					transition: opacity 0.5s;
					opacity: ${enableNav ? '0' : '1'};
					justify-self: flex-end;
					border: 1px solid var(--dark-green);
					border-radius: .6rem;
				}

				svg {
					width: 2rem;
					height: 2rem;
				}

				header {
					justify-content: space-between;	

				}
			}

		`}</style>
    </header>
}

export default Header