import MainLayout from "../../layout/MainLayout"
import axios from 'axios'
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

// AWS Config
import AWS from 'aws-sdk'
import { isImg } from "../../utils/isImg";
/* const albumBucketName = "colombiagasvehicular"; */
const bucketRegion = "us-east-1";
const IdentityPoolId = "us-east-1:50e9fc82-6903-4b22-b4ad-f8b2467ce46b";

// Aws
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import { amplifyConfigAdmin, authConfigAdmin } from '../../cognito/infoAdminPool'

// Functions
import { onAppLoad } from '../../cognito/authFunctions'

// Aws configure
Amplify.configure(amplifyConfigAdmin);
Auth.configure(authConfigAdmin);


AWS.config.update({
	region: bucketRegion,
	credentials: new AWS.CognitoIdentityCredentials({
		IdentityPoolId: IdentityPoolId
	})
})

/* const s3 = new AWS.S3({
	apiVersion: "2006-03-01",
	params: { Bucket: albumBucketName }
}); */

const Index = () => {

	const router = useRouter()

	const [selectedFile, setSelectedFile] = useState(null)
	const [imgSelected, setImgSelected] = useState(false)
	const [hreImgList, setHreImgList] = useState([])
	const [imgData, setImgData] = useState({
		imgMonth: new Date().getMonth() + 1,
		imgYear: new Date().getFullYear(),
		imgType: 'pop-up'
	})

	useEffect(() => {
		onAppLoad(router)
	}, [])

	useEffect(() => {
		console.log('objeccallt')
		getImg(imgData)
	}, [imgData])

	const onChange = e => {
		setImgData(
			Object.assign({}, imgData, { [e.target.name]: e.target.value })
		)
	}

	const getImg = async ({ imgYear, imgMonth, imgType }) => {
		const URL_API = `/api/advertising?imgYear=${imgYear}&imgMonth=${imgMonth}&imgType=${imgType}`
		console.log('here')
		const response = await axios.get(URL_API)
		console.log(response.data)
		const imgList = response?.data?.data?.Items.map(img => ({
			image: img.image.S,
			imgType: img.imgType.S,
			imgMonth: img.imgMonth.S,
			imgYear: img.imgYear.S,
			selected: img.selected.BOOL
		}))
		console.log(imgList)
		setHreImgList(imgList ? imgList : [])
	}

	const onSubmit = async e => {
		e.preventDefault();
		const fileName = selectedFile.name.replaceAll(' ', '-')
		console.log(fileName)
		const album = 'advertising/'
		let promise
		try {
			promise = await new AWS.S3.ManagedUpload({
				params: {
					Bucket: 'colombiagasvehicular',
					Key: album + fileName,
					Body: selectedFile
				}
			}).promise();
			const URL_API = '/api/advertising'

			const { imgYear, imgMonth, imgType } = imgData
			const response = await axios.post(URL_API, {
				image: promise.Location,
				imgMonth,
				imgYear,
				imgType,
			})
			console.log(response.data)

			setHreImgList(urlList => [...urlList, {
				image: promise.Location,
				imgMonth,
				imgYear,
				imgType,
			}])
			emptyForm()
		} catch (error) {
			console.log(error)

		}

	}

	const onChangeHandler = e => {

		const img = document.getElementById('img')
		console.log(img)
		img.style.visibility = 'visible'

		if (isImg(e.target.files[0]?.name)) {

			setSelectedFile(e.target.files[0])
			const objetURL = URL.createObjectURL(e.target.files[0])
			img.src = objetURL
			img.style.visibility = 'visible'
			setImgSelected(true)

		} else {
			console.log('el archivo debe ser imagen')
			img.style.visibility = 'hidden'
			setSelectedFile(undefined)
			setImgSelected(false)
		}
	}

	const emptyForm = () => {

		const img = document.getElementById('img')
		const file = document.getElementsByClassName('file')
		img.style.visibility = 'hidden'
		file.value = ''
		setSelectedFile(undefined)
		setImgSelected(false)

	}

	const toggleEnable = async (img) => {
		const { image, selected, imgMonth, imgYear, imgType } = img
		const URL_API = '/api/advertising'
		const response = await axios.put(URL_API, {
			image,
			imgMonth,
			imgYear,
			imgType,
			selected
		})

		setHreImgList(list => list.map(imgCurrent => {
			if (imgCurrent.image === img.image) {
				const cp = { ...imgCurrent }
				cp.selected = !cp.selected
				return cp
			}
			return imgCurrent
		}))
	}

	const delteImg = async (img) => {

		const { image } = img
		const URL_API = `/api/advertising?image=${image}`
		const response = await axios.delete(URL_API)
		console.log(response)

		setHreImgList(list => list.filter(imgCurrent => imgCurrent.image !== img.image))
	}

	return <MainLayout>

		<form onSubmit={onSubmit}>
			<div className="img-container">
				<button type="button" onClick={emptyForm} className="close" >
					<svg viewBox="0 0 512 512">
						<path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
					</svg>
				</button>
				<label className="upload">
					<span>Seleccionar imagen</span>
					<input className="hidden" id="file" type="file" name="file" onChange={onChangeHandler} accept='image/*' />
					<img id='img' />
				</label>
			</div>
			<div className="inputs">
				<select onChange={onChange} name="imgType" value={imgData.imgType}>
					<option value="pop-up">Pop-Up</option>
					<option value="banner">Banner</option>
				</select>
				<select onChange={onChange} name="imgYear" value={imgData.imgYear}>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
					<option value="2024">2024</option>
					<option value="2025">2025</option>
					<option value="2026">2026</option>
					<option value="2027">2027</option>
					<option value="2028">2028</option>
					<option value="2029">2029</option>
				</select>
				<select onChange={onChange} name="imgMonth" value={imgData.imgMonth}>
					<option value="1">Enero</option>
					<option value="2">Febrero</option>
					<option value="3">Marzo</option>
					<option value="4">Abril</option>
					<option value="5">Mayo</option>
					<option value="6">Junio</option>
					<option value="7">Julio</option>
					<option value="8">Agosto</option>
					<option value="9">Septiembre</option>
					<option value="10">Octubre</option>
					<option value="11">Noviembre</option>
					<option value="12">Diciembre</option>
				</select>
				<button type="submit">Upload</button>
			</div>
		</form>

		<h2>{imgData.imgType} - Galeria</h2>
		<ul>
			{
				hreImgList.map(img => (
					<li key={img.image}>
						<img className="img-galery" src={img.image} alt="not found" style={{ opacity: img.selected ? 1 : 0.5 }} />
						<button onClick={() => toggleEnable(img)} style={{ opacity: img.selected ? '1' : '0.5' }}>{img.selected ? 'Deshabilitar' : 'Habilitar'}</button>
						<button onClick={() => delteImg(img)}>Eliminar</button>
					</li>
				))
			}
		</ul>

		<style jsx>{`

			.img-container {
                border: 2px solid white;
                position: relative;
                height: 300px;
                width: 200px;
                overflow: hidden;
                border-radius: .3rem;
            }

			.upload {
                display: grid;
                justify-items: center;
                align-items: center;
                position: relative;
                cursor: pointer;
                height: 100%;
                width: 100% ;
                color: white;
            }

			.upload img {
                position: absolute;
                outline: none;
                width: 100%;
                height: 100%;
                visibility: hidden;
				object-fit: contain;
            }

			.close {
                visibility: ${imgSelected ? 'visible' : 'hidden'};
				z-index: 100;
				background-color: unset;
				position: absolute;
				right: 1rem;
				top: 1rem;
            }

			svg {
				color: white;
				height: 2rem;
				width: 2rem;
			}

			.hidden {
                width: 0;
                height: 0;
                overflow: hidden;
                position: absolute;
            }

			form {
                display: grid;
                grid-template-columns: auto 1fr;
				position: relative;
				background-color: var(--orange);
				padding: 3rem;
				margin: auto;
				border-radius: .3rem;
				max-width: 800px;
            }

			.inputs {
				display: grid;
				gap: 2rem;
				box-sizing: border-box;
				padding-left: 3rem;
			}

			select {
				background-color: transparent;
				padding: .5rem 1rem;
				border: none;
				border-bottom: 2px solid white;
				color: white;
				outline: none;
				cursor: pointer;
			}

			option {
				color: #666;
				padding: 1rem;
				border: none;
				margin: 1rem;
			}

			button {
				border-radius: .3rem;
				background-color: white;
			}

			button:hover {
				transform: scale(1);
			}



			h2 {
				text-align: center;
				color: white;
				font-size: 2rem;
				text-transform: uppercase;
				margin: 2rem 0;
			}

			ul {
				position: relative;
			}

			li {
				display: grid;
				justify-items: center;
				margin: 1rem 0;
			}

			li > button {
				padding: .5rem 1rem;
				margin-top: .5rem;
			}

			p {
				text-align: center;
			}

			.img-galery {
				margin: auto;
				display: block;
				height: 200px;
				position: relative;
			}


		
		`}</style>
	</MainLayout>
}

export default Index