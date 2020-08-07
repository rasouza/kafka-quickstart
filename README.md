![Confluent](https://i.imgur.com/GgZikl8.png)

Quick description

## Table of Contents

1. [Installation](#installation)
2. [Kafka Topics](docs/topics.md)
3. [Schema Registry](docs/schema-registry.md)
4. [KSQL](docs/ksql.md)
5. [Kafka Connect](docs/connect.md)

## Installation
```
docker-compose up
```
Spinning up  the whole platform may take some time. You can access Control Center UI through http://localhost:9021/

## Usage
In order to use each component and its features, follow the step-by-step tutorial on each topic above

## Ports
* 9021 → Control Center UI
* 2181 → Zookeeper
* 9092 → Kafka Broker
* 8081 → Schema Registry
* 8083 → Kafka Connect
* 8088 → KSQL Server
* 8082 → REST Proxy 

## Useful Links
[Kafka Quickstart](https://kafka.apache.org/quickstart)
[Kafka in a Nutshell](https://sookocheff.com/post/kafka/kafka-in-a-nutshell/)
[Avro Schema Registry Introduction](https://medium.com/@stephane.maarek/introduction-to-schemas-in-apache-kafka-with-the-confluent-schema-registry-3bf55e401321)
[Schema Registry API](https://docs.confluent.io/current/schema-registry/develop/api.html)
[Schema Evolution](https://docs.confluent.io/current/schema-registry/avro.html)
[Streams and Tables in Kafka](https://www.confluent.io/blog/kafka-streams-tables-part-1-event-streaming/)
[Generate Custom Test Data](https://docs.ksqldb.io/en/latest/developer-guide/test-and-debug/generate-custom-test-data/)
[KSQL Syntax Reference](https://docs.ksqldb.io/en/latest/developer-guide/syntax-reference/)
[Kafka Connect REST API](https://docs.confluent.io/current/connect/references/restapi.html#connect-userguide-rest)
[Confluent Hub](https://www.confluent.io/hub/)
#### Zookeeper
#### Kafka Broker
#### Schema Registry
#### Kafka Connect
#### KSQL