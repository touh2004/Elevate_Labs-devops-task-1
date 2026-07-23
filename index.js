const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 3000;

// A creative endpoint that acts as a DevOps health check
app.get('/api/health', (req, res) => {
    res.json({
        message: " System Pulse App is Active!",
        status: "Healthy ",
        timestamp: new Date().toISOString(),
        systemUptime: `${Math.floor(os.uptime() / 3600)} hours`,
        architecture: os.arch(),
        memoryUsage: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`
    });
});

app.get('/', (req, res) => {
    res.send(`
        <body style="background-color: #0d1117; color: #58a6ff; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh;">
            <div style="text-align: center; background: #161b22; padding: 40px; border-radius: 10px; border: 1px solid #30363d; box-shadow: 0 4px 8px rgba(0,0,0,0.5);">
                <h1 style="color: #c9d1d9;">DevOps CI/CD Pipeline Success! </h1>
                <p>Welcome to the Elevate Labs System Pulse App.</p>
                <a href="/api/health" style="color: #58a6ff; text-decoration: none; border: 1px solid #58a6ff; padding: 10px 20px; border-radius: 5px; display: inline-block; margin-top: 15px;">Check System Health</a>
            </div>
        </body>
    `);
});

const server = app.listen(PORT, () => {
    console.log(` System Pulse Server running on port ${PORT}`);
});

// We export the server so our tests can use it
module.exports = server;