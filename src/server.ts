
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.json({message: 'Hello, World!'});
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
