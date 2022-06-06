CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(50),
  title VARCHAR(100),
  price VARCHAR(6),
  weight INTEGER,
  process VARCHAR(50),
  process_category VARCHAR(20),
  variety text[],
  country VARCHAR(56),
  continent VARCHAR(20),
  product_url TEXT,
  image_url TEXT,
  sold_out boolean,
  date_added TIMESTAMP,
  vendor VARCHAR(20)
);