const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");

async function start() {
    const client = new S3Client({ region: "us-east-1" });
    const bucketParams = { Bucket: "arn:aws:s3::018821064628:accesspoint/mnwtgptndzniq.mrap" };
    const command = new ListObjectsCommand(bucketParams);
    const response = await client.send(command);
    console.log(response.Contents);
}

start();