import dotenv from 'dotenv';
import path from 'path';
import express from 'express';

dotenv.config();

const PORT = process.env.SERVER_PORT;

const DIST_DIR = path.join(__dirname, '..', 'dist');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get('*', function (req, res) {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}`),
);
