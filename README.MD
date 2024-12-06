### Initial Commit - Preparing Database

1. Setting of db connection: db.js
2. Build "Book" model to create Books table: models/book.js
3. Convert CSV to JSON (data.json)

   - [Amazon Top 50 Bestselling Books 2009 - 2019](https://www.kaggle.com/datasets/sootersaalu/amazon-top-50-bestselling-books-2009-2019/data)
   - [Papaparse npm package](https://www.npmjs.com/package/papaparse)
   - node .\data\csvToJson.js

4. Import data.json
   - node .\scripts\importBooks.js

