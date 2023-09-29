CREATE EXTERNAL TABLE IF NOT EXISTS ${self:custom.ATHENA_TABLE_NAME} (
  source string,
  logtype string,
  timestamp timestamp,
  message string
)
PARTITIONED BY (year string, month string, day string)
ROW FORMAT SERDE
  'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe'
STORED AS INPUTFORMAT
  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat'
OUTPUTFORMAT
  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat'
LOCATION 's3://${self:custom.s3.LOGS_BUCKET}/${self:custom.ATHENA_TABLE_NAME}/'
TBLPROPERTIES ('parquet.compression'='SNAPPY')