
import AWS from 'aws-sdk'

const endpoint = 'http://localhost:8000'
const dynamoDB = new AWS.DynamoDB({ /* endpoint, */ apiVersion: '2012-08-10', region: 'us-east-1' });

const handler = async (req, res) => {

	if (req.method === 'PUT') {
		const { service } = req.query

		try {
			// create format for elementes to update in dynamo
			let UpdateExpression = 'SET'
			for (const key in req.body) {
				UpdateExpression += ` ${key} = :${key},`
			}

			// remove last character -> for delete the las ','
			UpdateExpression = UpdateExpression.slice(0, -1);

			// create the values to update
			const ExpressionAttributeValues = {}
			for (const key in req.body) {
				ExpressionAttributeValues[`:${key}`] = { S: req.body[key] }
			}

			console.log(ExpressionAttributeValues)

			const resp = await dynamoDB.updateItem({
				TableName: 'banner',
				Key: {
					servicio: { S: service },
				},
				UpdateExpression,
				ExpressionAttributeValues
			}).promise();

			return res.status(200).json({
				success: 'success',
				message: 'AWS save data',
				/* data: resp */
			})

		} catch (err) {
			console.log(err)
			return res.status(200).json({
				success: 'error',
				message: 'Server error, can not save texts'
			})
		}

	} else {

		return res.status(405).json({ success: 'error', message: 'Method Not Allowed' })

	}

	return res.status(405).json({ success: 'error', message: 'Method Not Allowed' })


}


export default handler