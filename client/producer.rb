require "kafka"

logger = Logger.new($stderr)
topic = "payouts"

kafka = Kafka.new(
  seed_brokers: 'localhost:9092',
  client_id: "simple-producer",
  logger: logger,
)

producer = kafka.producer

begin
  $stdin.each do |line|
    producer.produce(line, topic: topic)
    producer.deliver_messages
  end
ensure
  producer.shutdown
end
