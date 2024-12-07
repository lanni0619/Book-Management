### Initial Commit - Preparing Database

1. Setting of db connection: db.js
2. Build "Book" model to create Books table: models/book.js
3. Convert CSV to JSON (data.json)

   ```
   node .\data\csvToJson.js
   ```

   - [datasets](https://www.kaggle.com/datasets/sootersaalu/amazon-top-50-bestselling-books-2009-2019/data)
   - [Papaparse](https://www.npmjs.com/package/papaparse)

4. Import data.json

   ```
   node .\scripts\importBooks.js
   ```

5. Unit test
   ```
   npm run test
   ```

