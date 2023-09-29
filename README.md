
# Serverless API Gateway+Firehose+Glue+S3+Athena

Powerful, cheap, simple, effective pattern for data storing and analysis using AWS and Serverless Framework.

This example is modeled for storing data for Logs

## Stack

- Serverless Framework
- AWS API Gateway
- AWS Firehose
- AWS Glue Database
- AWS S3
- AWS Athena

## Features

- API endpoint for JSON data input;
- Converts JSON to Apache Parquet (Columnar Database, very performant for data aggregation and data analysis);
- S3 for data storing (yeah, it's cheap);
- Partitioned by year, month, day;
- Athena for SQL analysis (pay only per amount of data read).

   
## Deploy

This command will deploy to `us-east-1`, stage `dev`:

```bash
  npm run deploy
```

## Examples of use

1. Input data on API Gateway endpoint

```sh
curl -X POST https://{yourUrlAfterDeployHere}/dev/recipe-apigw-athena -H "Content-Type: application/json" -d '{ " source": "financialSystem", "logtype": "error", "timestamp": "1694209417035", "message": "ooops, something went wrong" }'
```

2. Open AWS > Athena > Query Editor for SQL queries.


## References

[Serverless Guru Blog Article](https://www.serverlessguru.com/blog) - You can check my article on Serverless Guru blog with full explanation about this pattern.

