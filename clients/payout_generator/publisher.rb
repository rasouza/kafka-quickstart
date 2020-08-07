require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)

require_relative './generator.rb'

class TransactionProducer
  include Phobos::Producer

  SCHEMA_REGISTRY_URL = "http://localhost:8081/"
  SCHEMA_NAME = 'transactions-value'
  TOPIC = 'transactions'

  def initialize(verbose: true)
    Phobos.configure('kafka.yml')
    @avro = AvroTurf::Messaging.new(registry_url: SCHEMA_REGISTRY_URL)
    @verbose = verbose
  end

  def publish
    @transaction = TransactionGenerator.new.to_hash
    data = @avro.encode(@transaction, subject: SCHEMA_NAME, version: 1)
    producer.publish(topic: TOPIC, payload: data)

    p @transaction if @verbose
  end

end

producer = TransactionProducer.new
loop do
  producer.publish
  sleep(0.1)
end
