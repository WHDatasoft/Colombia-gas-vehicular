import { useState } from "react"
import Banner from "../../../components/Sections/Banner"
import AdminLayout from "../../../layout/AdminLayout"
import { getFromDb, onChange, onChangeImg, updateImg, updateText } from "../../../utils/servicesAdmin"



const Revision = ({ text, url }) => {

	const [textList, setTextList] = useState(text)

	const [urlImg, setUrlImg] = useState(url)

	const [selectedFile, setSelectedFile] = useState(null)

	return <AdminLayout>

		<Banner imgPerson="" fondo="banner-fondo-claro.png" icon="servicio4.svg" text="Revisions Anual">
			<label>
				<img className="person" src={urlImg} alt="" loading="eager" />
				<input onChange={e => onChangeImg(e, setSelectedFile, setUrlImg)} type="file" className="hidden" accept='image/*' />

				<button onClick={() => updateImg(selectedFile, 'revision')}>Actulizar imagen</button>
			</label>
			<form onSubmit={e => updateText(e, textList, 'revision')} className="text-wrapper">
				<textarea onChange={e => onChange(e, textList, setTextList)} name="text1" className="texto-1" value={textList?.text1} />
				<textarea onChange={e => onChange(e, textList, setTextList)} name="text2" className="texto-2" rows="1" value={textList?.text2} />
				<textarea onChange={e => onChange(e, textList, setTextList)} name="text3" className="texto-3" rows="1" value={textList?.text3} />

				<button>Actualizar textos</button>
			</form>
		</Banner>

		<style jsx>{`
			
			.text-wrapper {
				position: relative;
				box-sizing: border-box;
				font-size: 1rem;
				width: 100%;
				align-self: center;
				padding: 1rem;
			}

			.texto-1, .texto-2, .texto-3 {
				text-align: center;
				background-color: unset;
				width: 100%;
				overflow: hidden;
				border: none;
			}
		
			.texto-1 {
				color: var(--blue);
				font-size: 1.5em;
				font-weight: 00;
			}

			.texto-2 {
				margin: 2rem 0;
				font-weight: 600;
				color: var(--light-green);
				font-size: 1.5em;
			}

			.texto-3 {
				font-weight: 600;
				font-size: 3em;
				color: var(--blue);
			}

			.person {
				margin-top: 2rem;
				height: 11rem;
				align-self: flex-end;
				cursor: pointer;
				position: relative;
			}

			label {
				align-self: flex-end;
			}

			.hidden {
				position: absolute;
				width: 0;
				height: 0:
				visibility: hidden;
			}

			button {
				position: absolute;
				bottom: -4rem;
				left: 50%;
				transform: translateX(-50%);
				padding: .5rem 1rem;
				border-radius: .2rem;
				color: white;
				background-color: var(--orange)
			}
		
			@media screen and (max-width: 625px) {

				.text-wrapper {
					font-size: .7rem;
				}

				.texto-2 {
					margin: 1rem 0;
				}

			}

			@media screen and (max-width: 440px) {

				.text-wrapper {
					font-size: .6rem;
				}

				.texto-2 {
					margin: 1rem 0;
				}

			}

			@media screen and (max-width: 330px) {

				.text-wrapper {
					font-size: .55rem;
				}

				.texto-2 {
					margin: 1rem 0;
				}

			}
		
		`}</style>
	</AdminLayout>
}

export async function getStaticProps(context) {
	return await getFromDb('revision')
}

export default Revision
