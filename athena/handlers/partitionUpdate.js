'use strict';

const AWS = require('aws-sdk');
const AthenaExpress = require('athena-express');
const format = require('date-fns/format')

module.exports.run = async (event, context, callback) => {
  try {
    const time = new Date(event.Records[0].eventTime);
    const day = format(time, 'dd');
    const month = format(time, 'MM');
    const year = format(time, 'yyyy');

    const athenaExpress = new AthenaExpress({
        aws: AWS,
        s3: `s3://${process.env.LOGS_BUCKET}/output/`,
        db: process.env.DATABASE_NAME
    });

    const query = await athenaExpress.query(`
        ALTER TABLE logs ADD IF NOT EXISTS 
        PARTITION (year='${year}', month='${month}', day='${day}') 
        LOCATION '${process.env.LOGS_BUCKET_ARN}'
    `);

    return callback(null, 'success');
  } catch (error) {
    return callback(error);
  }
};