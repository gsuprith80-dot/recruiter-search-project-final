import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/search', (req, res) => {
  res.json({
    message: "Backend working. Replace stub with actual API logic."
  });
});

app.listen(4000, () => console.log("Server running on port 4000"));
