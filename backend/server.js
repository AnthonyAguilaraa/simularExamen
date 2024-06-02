const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const JWT_Secret = 'este_es_mi_token_secreto';

const testUsers = [
    { 
        email: 'antho@gmail.com', 
        password: '2024', 
        nombre: 'Anthony', 
        apellido: 'Aguilar', 
        telefono: '0934567890' 
    },
    { 
        email: 'usuario1@gmail.com', 
        password: '123', 
        nombre: 'Usuario', 
        apellido: 'Uno', 
        telefono: '0945678901' 
    },
    { 
        email: 'usuario2@gmail.com', 
        password: '321', 
        nombre: 'Usuario', 
        apellido: 'Dos', 
        telefono: '0956789012' 
    }
];

app.post('/api/authenticate', (req, res) => {
    if (req.body) {
        const { email, password } = req.body;
        const user = testUsers.find(u => u.email === email && u.password === password);

        if (user) {
            const token = jwt.sign({ email }, JWT_Secret);
            res.status(200).send({ 
                token, 
                user: {
                    email: user.email,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    telefono: user.telefono
                }
            });
            console.log('Inicio de sesión exitoso', token);
        } else {
            res.status(403).send({ errorMessage: '¡Autorización requerida!' });
            console.log('¡Autorización requerida!');
        }
    } else {
        res.status(403).send({ errorMessage: 'Por favor introduzca su correo electrónico y contraseña' });
    }
});

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`));
