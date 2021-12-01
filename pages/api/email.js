import aws from 'aws-sdk'

const region = "us-east-1";
const ses = new aws.SES({ region })


const handler = async (req, res) => {

	if (req.method = 'POST') {

		const { name, phone, message, from } = req.body

		const params = {
			Destination: {
				CcAddresses: [],
				ToAddresses: ['marketing@colombiagasvehicular.co']
			},
			Message: {
				Subject: {
					Charset: "UTF-8",
					Data: `Formulario Web ${from} - ${name}`
				},
				Body: {
					Html: {
						Charset: "UTF-8",
						Data: `<ul>
							<li>Nombre: ${name}</li>
							<li>Telefono: ${phone}</li>
							<li>Mensaje: ${message}</li>
						</ul>`,
					}
				}

			},
			Source: "marketing@colombiagasvehicular.co",
			ReplyToAddresses: [
				/* more items */
			],
		}

		try {
			const data = await ses.sendEmail(params).promise()
			console.log("Success", data);
			return res.status(200).json({
				success: 'ok',
				message: 'Message sended',
				data
			})

		} catch (err) {
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
