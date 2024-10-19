// mobile-manager-backend/src/index.ts
import express from 'express';
import path  from "./src/routes/mobileRoutes";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api/v1/smartphones', path);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
