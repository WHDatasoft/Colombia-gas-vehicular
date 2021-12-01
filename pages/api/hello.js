/* 
import { SESClient } from "@aws-sdk/client-ses";
import { SendEmailCommand } from "@aws-sdk/client-ses"; */
// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"
// Create SES service object.
/* const sesClient = new SESClient({ region: REGION }); */

import aws from 'aws-sdk'
const ses = new aws.SES({ region: REGION })


const handler = async (req, res) => {


	const params = {
		Destination: {
			CcAddresses: [],
			ToAddresses: ['marketing@colombiagasvehicular.co']
		},
		Message: {
			Subject: {
				Charset: "UTF-8",
				Data: 'Testing from Aws SES'
			},
			Body: {
				Html: {
					Charset: "UTF-8",
					Data: "HTML_FORMAT_BODY",
				},
				Text: {
					Charset: "UTF-8",
					Data: "TEXT_FORMAT_BODY",
				},
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
		return res.status(200).json({ name: 'John Doe', data })

	} catch (err) {
		console.log("Error", err);
		return res.status(200).json({ name: 'Error' })
	}


}

export default handler
