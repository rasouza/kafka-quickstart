require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)

require_relative './generator.rb'

avro = AvroTurf::Messaging.new(registry_url: 'http://localhost:8081')

message = avro.encode(TransactionGenerator.new.to_hash, subject: 'transactions-value', version: 1)
p message
