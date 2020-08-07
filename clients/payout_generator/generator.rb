class TransactionGenerator
  class << self; attr_accessor :timestamp end

  TIMESTAMP_STEP_RANGE = [1.day.to_i*1000, 3.day.to_i*1000] # 1-15 days
  AMOUNT_RANGE = [10.0, 1000.0]
  MERCHANT_REGEX = /[A-J]{1}/
  TRANSACTION_REGEX = /transaction_[1-9][0-9][0-9]/

  @timestamp = 1514764800000 # 2018-01-01

  def initialize
    generate
  end

  def rand_merchant
    @merchant_id = MERCHANT_REGEX.random_example
  end

  def rand_transaction
    @transaction_id = TRANSACTION_REGEX.random_example
    @amount = rand(AMOUNT_RANGE[0]..AMOUNT_RANGE[1]).round(2)
  end

  def generate
    rand_merchant
    rand_transaction
    TransactionGenerator.timestamp += rand(TIMESTAMP_STEP_RANGE[0]..TIMESTAMP_STEP_RANGE[1])
    @timestamp = TransactionGenerator.timestamp
    self
  end

  def to_hash
    self.instance_values
  end

  def self.show
    rand(TIMESTAMP_STEP_RANGE[0]..TIMESTAMP_STEP_RANGE[1])
    1514764800000+(1.day.to_i*1000)
  end

end
