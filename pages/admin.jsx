import MainLayout from "../layout/MainLayout"
import axios from 'axios'
import { useState } from "react"

// AWS Config
import AWS from 'aws-sdk'
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

	const [data, setData] = useState(null)

	const onSubmit = async e => {
		e.preventDefault();
		const files = document.getElementById("photoupload").files
		const file = files[0]

		/* const file = new FormData()
		file.append('img', files[0]) */

		const upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: 'colombiagasvehicular',
				Key: 'photoKey5.png',
				Body: file
			}
		});

		const promise = await upload.promise();

		console.log(promise)

		/* const response = await axios.post('/api/upload/advertising', { file: new Buffer.from('binary', files[0]) })


		console.log(response) */

	}

	/* 	const onFileChange = event => {
			const files = event.target.files;
			var file = files[0];
			var reader = new FileReader();
			reader.onloadend = function (e) {
	
				// save this data1111 and send to server
				setData(e.target.result)
	
			};
			reader.readAsBinaryString(file);
		} */

	return <MainLayout>

		<form onSubmit={onSubmit}>
			<input id="photoupload" type="file" name="" />
			<button>Upload</button>
			<img src="https://colombiagasvehicular.s3.amazonaws.com/photoKey5.png" alt="" />
		</form>

	</MainLayout>
}

export default Index