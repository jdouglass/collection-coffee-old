require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./keys');

const app = express();
const port = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());

// get all products
app.get('/products', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM products;');
    res.status(200).json({
      data: results.rows
    });
  } catch (err) {
    console.log(err);
  }
});

// get a product by product_url
app.get('/products/item/product_url', async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products WHERE product_url = $1;", [req.query.product_url]);
    res.status(200).json({
      data: result.rows
    });
  } catch (error) {
    console.log(error);
  }
});

// get all products by brand
app.get('/products/item/brand', async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products WHERE brand = $1;", [req.query.brand]);
    res.status(200).json({
      data: result.rows
    });
  } catch (error) {
    console.log(error);
  }
});

// get distinct varieties
app.get('/products/variety', async (req, res) => {
  try {
    const result = await db.query("SELECT DISTINCT variety FROM products");
    res.status(200).json(
      result.rows
    );
  } catch (error) {
    console.log(error);
  }
});

// get distinct countries
app.get('/products/country', async (req, res) => {
  try {
    const result = await db.query("SELECT DISTINCT country FROM products");
    res.status(200).json({
      data: result.rows
    });
  } catch (error) {
    console.log(error);
  }
});

// get distinct continents
app.get('/products/continent', async (req, res) => {
  try {
    const result = await db.query("SELECT DISTINCT continent FROM products");
    res.status(200).json({
      data: result.rows
    });
  } catch (error) {
    console.log(error);
  }
});

// create a product
app.post('/products', async (req, res) => {
  try {
    const results = await db.query('insert into products (brand, title, price, weight, process, process_category, variety, country, continent, product_url, image_url, sold_out, date_added, vendor) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning *',
      [
        req.body.brand,
        req.body.title,
        req.body.price,
        req.body.weight,
        req.body.process,
        req.body.process_category,
        req.body.variety,
        req.body.country,
        req.body.continent,
        req.body.product_url,
        req.body.image_url,
        req.body.sold_out,
        req.body.date_added,
        req.body.vendor
      ]);
    res.status(200).json({
      data: {
        product: results.rows[0]
      }
    });
  } catch (error) {
    console.log(error);
  }
});


// update product
app.put('/products/item', async (req, res) => {
  try {
    const result = await db.query('update products set brand = $1, title = $2, price = $3, weight = $4, process = $5, process_category = $6, variety = $7, country = $8, continent = $9, image_url = $10, sold_out = $11, vendor = $12 where product_url = $13 returning *',
      [
        req.body.brand,
        req.body.title,
        req.body.price,
        req.body.weight,
        req.body.process,
        req.body.process_category,
        req.body.variety,
        req.body.country,
        req.body.continent,
        req.body.image_url,
        req.body.sold_out,
        req.body.vendor,
        req.body.product_url
      ]);
    res.status(200).json({
      data: {
        product: result.rows[0]
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// delete product by product_url
app.delete('/products/item', async (req, res) => {
  try {
    await db.query('DELETE FROM products WHERE product_url = $1', [req.query.product_url]);
    res.status(200).json();
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`server is running and listening on port ${port}`);
});
