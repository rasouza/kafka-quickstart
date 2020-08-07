![Kafka Broker](https://www.cloudkarafka.com/img/blog/consumer-group-kafka.png)

In this tutorial you'll create a new topic called `transactions`. You can accomplish it either through **Control Center** or **CLI**

## CLI
```
docker-compose exec broker kafka-topics --create --topic transactions --replication-factor 1 --partitions 1 --zookeeper zookeeper:2181
```
## Control Center
* Access http://localhost:9021

[![Kafka Topic](https://j.gifs.com/ANk2zp.gif)](http://www.youtube.com/watch?v=jGEv246l6fc "Kafka Topic")

## Useful Commands
* To list all topics:
```
docker-compose exec broker kafka-topics --list --zookeeper zookeeper:2181
```

* To run a console consumer on `transactions` topic:
```
docker-compose exec broker kafka-console-consumer --bootstrap-server kafka:9092 --topic transactions --from-beginning
```

* To create a topic with 3 replicas and 4 partitions:
```
docker-compose exec broker kafka-topics --create --topic transactions --replication-factor 3 --partitions 4 --zookeeper zookeeper:2181
```

* To describe `transactions` topic:
```
docker-compose exec broker kafka-topics --zookeeper zookeeper:2181 --describe --topic transactions 
```