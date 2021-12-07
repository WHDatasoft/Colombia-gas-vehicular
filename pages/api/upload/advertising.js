import AWS from 'aws-sdk'

const Bucket = "colombiagasvehicular";
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
	params: { Bucket }
});

export const config = {
	api: {
		bodyParser: false,
	}
}


const handler = async (req, res) => {

	if (req.method === 'GET') {

		try {

			const data = await s3.listObjects({ Prefix: 'advertising/' }).promise()

			const url = 'https://s3.amazonaws.com/colombiagasvehicular/'

			const hreImgList = data.Contents.map(photo => url + photo.Key)

			return res.status(200).json({
				success: 'ok',
				message: 'Message sended',
				hreImgList
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