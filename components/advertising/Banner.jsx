import axios from "axios"
import { useEffect, useState } from "react"

const Banner = () => {

	const [image, setImage] = useState('')

	useEffect(() => {
		getImg()
	}, [])

	const getImg = async () => {
		const date = new Date()
		const imgYear = date.getFullYear()
		const imgMonth = date.getMonth() + 1
		const imgType = 'banner'
		const URL_IMG = `/api/advertising?imgType=${imgType}&imgYear=${imgYear}&imgMonth=${imgMonth}&selected=true`
		const response = await axios.get(URL_IMG)
		console.log(response.data)
		setImage(response?.data?.data?.Items[0]?.image?.S ? response.data.data.Items[0].image.S : '')
	}

	return <article className="container">

		<img src={image} alt="" />

		<style jsx>{`

			img {
				display: block;
				margin: auto;
				margin-bottom: ${image ? '2rem' : '0'};
			}

		`}</style>
	</article>
}

export default Banner