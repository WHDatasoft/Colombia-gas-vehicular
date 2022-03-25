import Image from 'next/image'

const ImageContent = ({ image }) => {

	const myLoader = () => {
		console.log(image)
		return image
	}
	return <Image
		loader={myLoader}
		src="/img/back.jpg"
		alt="promocion colombia gas vehicular"
		height="100px"
		width="100px"
		layout="responsive"
		placeholder="blur"
		blurDataURL="/img/back.jpg"
	/>
}

export default ImageContent