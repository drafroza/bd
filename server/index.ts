import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Serve Google Search Console verification file directly
  app.get("/google852464f871fe3c75.html", (_req, res) => {
    res.type("text/html").send("google-site-verification: google852464f871fe3c75.html");
  });

  // Serve robots.txt directly
  app.get("/robots.txt", (_req, res) => {
    res.sendFile(path.join(staticPath, "robots.txt"));
  });

  // Serve sitemap.xml directly
  app.get("/sitemap.xml", (_req, res) => {
    res.sendFile(path.join(staticPath, "sitemap.xml"));
  });

  // Handle client-side routing - serve index.html for all other routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
