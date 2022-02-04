import boto3
import boto3.session

# Create your own session
my_session = boto3.session.Session()

client = my_session.resource('s3', region_name='sa-east-1')

bucket = client.Bucket('arn:aws:s3::018821064628:accesspoint/mnwtgptndzniq.mrap')
for obj in bucket.objects.all():
    print(obj.key)