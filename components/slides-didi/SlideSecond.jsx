import ClientMain from "../Sections/ClientMain"
import DidiAside from "./DidiAside"

const SlideSecond = ({ backgroundImg, color, component }) => {
	return <ClientMain
		urlImg={backgroundImg}
		backgroundColor={color}
		rowGap="3"
		ContentAside={component}
	/>
}

export default SlideSecond