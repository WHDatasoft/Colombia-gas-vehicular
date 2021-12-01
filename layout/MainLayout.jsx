import { useEffect, useState } from "react"
import Hoja from "../components/Decorations/Hoja"
import Header from "../components/Header/Header"
import NavSocial from "../components/social/NavSocial";
import Whatsapp from "../components/social/Whatsapp";

const MainLayout = ({ children }) => {

	const [hojasList, setHojasList] = useState([]);

	useEffect(() => {
		const count = 0
		const docHeight = document.body.clientWidth
		count++
		setHojasList(list => [...list, <Hoja key={docHeight * Math.random()} left={docHeight * Math.random()} img="/icon/hoja.svg" />])
		const timer = setInterval(() => {
			count++
			if (count < 4) {
				setHojasList(list => [...list, <Hoja key={docHeight * Math.random()} left={docHeight * Math.random()} img="/icon/hoja.svg" />])
			} else {
				setHojasList(list => [...list, <Hoja key={docHeight * Math.random()} left={docHeight * Math.random()} img="/icon/GNV.svg" />])
				count = 0
			}
		}, 4000);

		return () => {
			clearInterval(timer)
		}

	}, [])


	return <div className="container">
		<Header />
		<Whatsapp />
		<NavSocial />

		{/* {
			hojasList.map(hoja => hoja)
		} */}


		{children}

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

export default MainLayout
