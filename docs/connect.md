![Kafka Connect](https://hackernoon.com/hn-images/1*eC3fKob7FdMJqITZX5ZX6w.png)

In this tutorial we're going to update the database with every message that was previously processed by the **Kafka Streams**. There's a bunch of connectors ready to use in [Confluent Hub](https://www.confluent.io/hub/) page. Since the platform and the community is very mature, chances are there's already the Kafka Connector that you need published there.

In this use case, we're going to use [JDBC Sink Connector](https://www.confluent.io/hub/confluentinc/kafka-connect-jdbc). You can use the following values as reference:
```
{
  "name": "sqlite",
  "config": {
    "connector.class": "io.confluent.connect.jdbc.JdbcSinkConnector",
    "tasks.max": "10",
    "topics": "PAYOUTS",
    "connection.url": "jdbc:sqlite:/root/payouts.db",
    "auto.create": "true",
    "pk.mode": "record_value",
    "pk.fields": "MONTH,MERCHANT_ID",
    "insert.mode": "upsert"
  }
}
```

This connector creates a `payouts.db` file in `/root` folder in `connect` container. Whenever a new message is aggregated in `payouts` topic, it updates the database accordingly instead of creating a new duplicated record.

Again, you can accomplish this tutorial either through **Control Center** or **REST API**

## REST API
```
curl -X POST -H "Content-type: application/json" localhost:8083/connectors --data '{ "name": "sqlite", "config": { "connector.class": "io.confluent.connect.jdbc.JdbcSinkConnector", "tasks.max": "10", "topics": "PAYOUTS", "connection.url": "jdbc:sqlite:/root/payouts.db", "auto.create": "true", "pk.mode": "record_value", "pk.fields": "MONTH,MERCHANT_ID", "insert.mode": "upsert" } }'
```
## Control Center
[![Kafka Connect](https://j.gifs.com/ANk233.gif)](https://github.com/rasouza/kafka-quickstart "Kafka Connect")

## Useful commands:
* Get a list of active connectors:
```
GET /connectors HTTP/1.1
```

* Create a new connector, returning the current connector info if successful:
```
POST /connectors HTTP/1.1
Host: connect.example.com
Content-Type: application/json
Accept: application/json

{
    "name": "hdfs-sink-connector",
    "config": {
        "connector.class": "io.confluent.connect.hdfs.HdfsSinkConnector",
        "tasks.max": "10",
        "topics": "test-topic",
        "hdfs.url": "hdfs://fakehost:9000",
        "hadoop.conf.dir": "/opt/hadoop/conf",
        "hadoop.home": "/opt/hadoop",
        "flush.size": "100",
        "rotate.interval.ms": "1000"
    }
}
```