import axios from "axios"
import { useEffect, useState } from "react"
import FormAdvertising from "../Forms/FormAdvertising"

const PopUp = () => {

	const [isEnable, setIsEnable] = useState(false)
	const [image, setImage] = useState('')
	const [enableForm, setEnableForm] = useState(false)

	useEffect(() => {
		const isSeen = sessionStorage.getItem('pop-up')
		if (isSeen) {
			setIsEnable(false)
		} else {
			setIsEnable(true)
			getImg()
		}
	}, [])

	const getImg = async () => {
		const date = new Date()
		const imgYear = date.getFullYear()
		const imgMonth = date.getMonth() + 1
		const imgType = 'pop-up'
		const URL_IMG = `/api/advertising?imgType=${imgType}&imgYear=${imgYear}&imgMonth=${imgMonth}&selected=true`
		const response = await axios.get(URL_IMG)
		setImage(response?.data?.data?.Items[0]?.image?.S ? response.data.data.Items[0].image.S : '')
	}


	const toggleEnable = () => {
		setIsEnable(enable => !enable)
		sessionStorage.setItem('pop-up', 'seen')
	}

	return isEnable ?
		<article className="background">

			<div className="advertising">

				<button onClick={toggleEnable}>
					<svg viewBox="0 0 512 512">
						<path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path>
					</svg>
				</button>
				{
					enableForm
						?
						<FormAdvertising setIsEnable={setIsEnable} />
						:
						<img onClick={() => setEnableForm(true)} src={image} alt="" />
				}
			</div>

			<style jsx>{`

				.background {
					position: fixed;
					z-index: 5;
					top: 0;
					left: 0;
					width: 100%;
					height: 100vh;
					display: grid;
					place-items: center;
					background-color: var(--blue-transparent);
				}

				.advertising {
					position: relative;
				}

				img {
					height: 70vmin;
					cursor: pointer;
				}

				button {
					position: absolute;
					color: ${enableForm ? 'white' : 'var(--blue)'};
					background-color: unset;
					top: 1rem;
					right: 1rem;
					z-index: 10;
				}

				svg {
					height: 2rem;
				}

			`}</style>
		</article>

		:

		null
}

export default PopUp