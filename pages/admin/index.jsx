import MainLayout from "../../layout/MainLayout"
import axios from 'axios'
import { useEffect, useState } from "react"

// AWS Config
import AWS from 'aws-sdk'
import { isImg } from "../../utils/isImg";
const albumBucketName = "colombiagasvehicular";
const bucketRegion = "us-east-1";
const IdentityPoolId = "us-east-1:50e9fc82-6903-4b22-b4ad-f8b2467ce46b";


AWS.config.update({
	region: bucketRegion,
	credentials: new AWS.CognitoIdentityCredentials({
		IdentityPoolId: IdentityPoolId
	})
})

const s3 = new AWS.S3({
	apiVersion: "2006-03-01",
	params: { Bucket: albumBucketName }
});

const Index = () => {

	const [selectedFile, setSelectedFile] = useState(null)
	const [imgSelected, setImgSelected] = useState(false)
	const [hreImgList, setHreImgList] = useState([])

	useEffect(() => {
		getImg()
	}, [])

	const getImg = async () => {
		const url = 'api/upload/advertising'
		const response = await axios.get(url)
		setHreImgList(response.data.hreImgList)
	}

	const onSubmit = async e => {
		e.preventDefault();
		const fileName = selectedFile.name.replace(/ /, '_')
		const album = 'advertising/'

		const upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: 'colombiagasvehicular',
				Key: album + fileName,
				Body: selectedFile
			}
		});

		const promise = await upload.promise();

		console.log(promise.Location)

		setHreImgList(urlList => [...urlList, promise.Location])
		emptyForm()

	}

	const onChangeHandler = e => {

		const img = document.getElementById('img')
		console.log(img)

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
			<button type="submit">Upload</button>
		</form>
		{
			hreImgList.map(url => (
				<img src={url} alt="not found" />
			))
		}

		<style jsx>{`
		
			.img-container {
                border: 1px solid #aaaaaabb;
                position: relative;
                height: 300px;
                width: 200px;
                overflow: hidden;
                border-radius: 12px;
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
                object-fit: cover;
                width: 100%;
                height: 100%;
                visibility: hidden;
				object-fit: cover;
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
            }

		
		`}</style>
	</MainLayout>
}

export default Index