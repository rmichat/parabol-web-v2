import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: true, limit: '5mb' }));

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      service: 'Parabol Argentina Web Platform',
      timestamp: new Date().toISOString(),
    });
  });

  // Contact form submission endpoint
  app.post('/api/contact', (req, res) => {
    const { name, company, phone, email, message } = req.body;
    console.log('[Parabol Contact Lead Received]:', { name, company, phone, email, message });
    res.json({
      success: true,
      message: 'Consulta recibida correctamente. Un asesor técnico se contactará a la brevedad.',
    });
  });

  // Serve public directory assets
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Vite integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Parabol Argentina Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
