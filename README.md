## Quick steps
### Topics

`docker-compose exec kafka kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic payouts`

`docker-compose exec kafka kafka-topics --list --zookeeper localhost:2181`

`docker-compose exec kafka kafka-console-consumer --bootstrap-server localhost:9092 --topic payouts --from-beginning`
