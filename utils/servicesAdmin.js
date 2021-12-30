import AWS from 'aws-sdk'
import axios from "axios"
import { isImg } from './isImg';
const dynamoDB = new AWS.DynamoDB({ /* endpoint, */ apiVersion: '2012-08-10', region: 'us-east-1' });


const bucketRegion = "us-east-1"
const IdentityPoolId = "us-east-1:50e9fc82-6903-4b22-b4ad-f8b2467ce46b"

AWS.config.update({
	region: bucketRegion,
	credentials: new AWS.CognitoIdentityCredentials({
		IdentityPoolId: IdentityPoolId
	})
})


export const updateText = async (e, textList, service) => {
	e.preventDefault();
	const API_URL = `/api/banner?service=${service}`
	try {
		const response = await axios.put(API_URL, textList)
		alert('texto actualizado')
	} catch (error) {
		console.log(error)
		alert('error al guardar el texto')
	}
}

export const onChange = (e, textList, setTextList) => {
	setTextList(
		Object.assign({}, textList, { [e.target.name]: e.target.value })
	)
}

export const onChangeImg = (e, setSelectedFile, setUrlImg) => {
	if (isImg(e?.target?.files[0]?.name)) {
		setSelectedFile(e.target.files[0])
		const objetURL = URL.createObjectURL(e.target.files[0])
		setUrlImg(objetURL)
	} else {
		alert('el archivo no es una imagen')
	}
}

export const updateImg = async (selectedFile, service) => {

	const fileName = selectedFile.name.replaceAll(' ', '-')
	const album = 'banner-servicios/'

	try {
		const promise = await new AWS.S3.ManagedUpload({
			params: {
				Bucket: 'colombiagasvehicular',
				Key: album + fileName,
				Body: selectedFile
			}
		}).promise();
		const API_URL = `/api/banner?service=${service}`
		const response = await axios.put(API_URL, { urlImg: promise.Location })

		alert('imagen actualizada')
	} catch (error) {
		console.log(error)
		alert('error al cargar la imagen')
	}
}

export const getFromDb = async (service) => {
	try {

		const data = await dynamoDB.scan({
			TableName: 'banner',
			FilterExpression: "servicio = :servicio",
			ExpressionAttributeValues: {
				":servicio": { S: service }
			},
		}).promise();

		const text = {}
		for (const key in data.Items[0]) {
			if (key !== 'servicio' && key !== 'urlImg') {
				text[key] = data.Items[0][key].S
			}
		}
		const url = data.Items[0].urlImg.S

		return {
			props: { text, url }, // will be passed to the page component as props
		}
	} catch (error) {

		console.log(error)

		return {
			props: {}, // will be passed to the page component as props
		}
	}
}