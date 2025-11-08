const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint sederhana untuk mendapatkan daftar tools DevOps
app.get('/api/tools', (req, res) => {
    const tools = [
        { name: 'Git', category: 'Version Control' },
        { name: 'Jenkins', category: 'CI/CD' },
        { name: 'Docker', category: 'Containerization' },
        { name: 'Kubernetes', category: 'Orchestration' },
        { name: 'Terraform', category: 'Infrastructure as Code' },
        { name: 'Ansible', category: 'Configuration Management' }
    ];
    res.json(tools);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});