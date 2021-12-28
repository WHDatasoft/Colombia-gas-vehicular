
import AWS from 'aws-sdk'

const endpoint = 'http://localhost:8000'
const dynamoDB = new AWS.DynamoDB({ /* endpoint, */ apiVersion: '2012-08-10', region: 'us-east-1' });

const handler = async (req, res) => {

	if (req.method === 'GET') {

		const { imgYear, imgMonth, imgType, selected } = req.query
		console.log(req.query)

		try {
			let FilterExpression = "imgType = :imgType and imgYear = :imgYear and imgMonth = :imgMonth"
			const ExpressionAttributeValues = {
				":imgType": { S: imgType },
				":imgMonth": { S: imgMonth },
				":imgYear": { S: imgYear }
			}
			if (selected) {
				FilterExpression = "imgType = :imgType and imgYear = :imgYear and imgMonth = :imgMonth and selected = :selected"
				ExpressionAttributeValues[":selected"] = { BOOL: true }
			}

			const resp = await dynamoDB.scan({
				TableName: 'marketing',
				FilterExpression,
				ExpressionAttributeValues
			}).promise();

			return res.status(200).json({
				success: 'success',
				message: 'got image',
				data: resp
			})
		} catch (error) {

			console.log(error)
			return res.status(200).json({
				success: 'error',
				message: 'Server error, can not get image'
			})

		}


	} else if (req.method === 'POST') {

		const { image, imgMonth, imgYear, imgType } = req.body
		console.log(image, imgMonth, imgYear, imgType)

		try {

			const resp = await dynamoDB.putItem({
				TableName: 'marketing',
				Item: {
					image: { S: image },
					imgType: { S: imgType },
					imgYear: { S: imgYear + '' },
					imgMonth: { S: imgMonth + '' },
					selected: { BOOL: false },
				}
			}).promise();

			return res.status(200).json({
				success: 'success',
				message: 'AWS save data',
				data: resp
			})

		} catch (err) {
			console.log(err)
			return res.status(200).json({
				success: 'error',
				message: 'Server error, can not save image'
			})
		}

	} else if (req.method === 'PUT') {

		const { image, selected, imgMonth, imgYear, imgType, } = req.body

		try {

			const resp = await dynamoDB.putItem({
				TableName: 'marketing',
				Item: {
					image: { S: image },
					imgType: { S: imgType },
					imgYear: { S: imgYear + '' },
					imgMonth: { S: imgMonth + '' },
					selected: { BOOL: !selected },
				}
			}).promise();

			return res.status(200).json({
				success: 'success',
				message: 'AWS save data',
				data: resp
			})

		} catch (err) {
			console.log(err)
			return res.status(200).json({
				success: 'error',
				message: 'Server error, can not save image'
			})
		}

	} else if (req.method === 'DELETE') {

		const { image } = req.query

		try {

			const resp = await dynamoDB.deleteItem({
				TableName: 'marketing',
				Key: {
					image: { S: image }
				}
			}).promise();

			return res.status(200).json({
				success: 'success',
				message: 'AWS delete data',
				data: resp
			})

		} catch (err) {
			console.log(err)
			return res.status(200).json({
				success: 'error',
				message: 'Server error, can not delete image'
			})
		}

	} else {

		return res.status(405).json({ success: 'error', message: 'Method Not Allowed' })

	}

}


export default handler