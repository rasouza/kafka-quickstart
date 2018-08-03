## Quick steps
### Topics

`cli/bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test`

`cli/bin/kafka-topics.sh --list --zookeeper localhost:2181`

### Producer/Consumer

`cli/bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test`

`cli/bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning`

### Kafka Connect

`cli/bin/connect-standalone.sh cli/config/connect-standalone.properties cli/config/connect-file-source.properties cli/config/connect-file-sink.properties`
