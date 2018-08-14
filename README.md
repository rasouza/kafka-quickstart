## Quick steps
### Topics

- Create `payout` topic
```
docker-compose exec kafka kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic payouts
```

- Check if `payout` topic was created
```
docker-compose exec kafka kafka-topics --list --zookeeper localhost:2181
```

- Run consumer to listen to `payout` topic
```
docker-compose exec kafka kafka-console-consumer --bootstrap-server localhost:9092 --topic payouts --from-beginning
```

- Run producer and start typing...
```
ruby client/producer.rb
```
