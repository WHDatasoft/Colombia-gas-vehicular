import AWS from 'aws-sdk'

import { formData } from '../../../utils/getImgForm'

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

export const config = {
	api: {
		bodyParser: false,
	}
}


const handler = async (req, res) => {

	if (req.method === 'GET') {

		try {

			s3.listObjects({ Prefix: 'photoKey2' }, function (err, data) {
				if (err) {

					console.log(err)
					return res.status(200).json({
						success: 'error',
						message: 'primer error'
					})
				}

				const href = this.request.httpRequest.endpoint.href
				console.log(href)
				console.log('------------------------------------------------------------')
				console.log(href + albumBucketName + '/')
				console.log(data)
				console.log('------------------------- photos ---------------------------')
				const photos = data.Contents.forEach((photo) => {
					const photoKey = photo.Key;
					console.log(photo.Key)
					/* const photoUrl = bucketUrl + encodeURIComponent(photoKey); */
				})
			})

			return res.status(200).json({
				success: 'ok',
				message: 'Message sended',

			})

		} catch (error) {

			console.log(error)

			return res.status(200).json({
				success: 'error',
				message: 'AWS can not sent email'
			})

		}

	} else if (req.method === 'POST') {

		/* const data = await formData(req)

		console.log(data) */

		console.log(req.body)

		try {

			/* console.log(file, test)

			const upload = new AWS.S3.ManagedUpload({
				params: {
					Bucket: 'colombiagasvehicular',
					Key: 'photoKey4.png',
					Body: Buffer.from("binary", file)
				}
			});

			const promise = await upload.promise(); */

			/* const buket = await s3.listObjects().promise()

			console.log(buket) */

			return res.status(200).json({
				success: 'ok',
				message: 'Message sended',
				/* promise */
			})


		} catch (error) {

			console.log(error)

			return res.status(200).json({
				success: 'error',
				message: 'AWS can not sent email'
			})

		}

	} else {

		return res.status(405).json({ success: 'error', message: 'Method Not Allowed' })

	}

}


export default handler