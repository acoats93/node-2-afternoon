const express = require('express');
const mc = require('./controllers/messages_controller.js');

const app = express();

app.use(express.json());

app.get('/api/messages', mc.read);
app.post('/api/messages', mc.create);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

app.listen(3001, () => console.log('Listening on 3001, BAAABBBYYY!!!'))