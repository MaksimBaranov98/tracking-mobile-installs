create TABLE users(
  id SERIAL PRIMARY KEY,
  evm_address VARCHAR(255),
  substrate VARCHAR(255),
  twitter VARCHAR(255),
  telegram VARCHAR(255),
  campaign_name VARCHAR(255)
)
