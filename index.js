import express from 'express';
//import { buscarusuariomiddleware } from './middleware/buscarusuariomiddleware.js';

const __dirname = import.meta.dirname;
const app = express()

app.use(express.static(__dirname + 'public'));

const usuarios = ["Juan", "Jocelyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"];

export default usuarios

//Ruta 1
app.get('/abracadabra/usuarios', (req, res) => {
    res.json(usuarios)
})


const buscarusuariomiddleware = (req, res, next) => {
    const usuarioBuscado = req.params.usuario
    const encontrado = usuarios.find(usuario => usuario === usuarioBuscado);
    if (encontrado) {
        req.encontrado = true;


    } else {
        req.encontrado = false;
    }
    next();
}

//Ruta 2
app.get('/abracadabra/juego/:usuario', buscarusuariomiddleware, (req, res) => {
    const usuarioBuscado = req.params.usuario;

    if (req.encontrado) {

        res.sendFile(__dirname + '/public/index.html');
    } else {
        res.sendFile(__dirname + '/public/assets/who.jpeg');

    }

});

app.get('/abracadabra/conejo/:n', (req, res) => {
    const parametro = req.params.n
    console.log(parametro)
    const numeroAleatorio = Math.floor(Math.random(parametro) * 2) + 1;
    console.log(numeroAleatorio);
    if (parametro == numeroAleatorio) {
        res.sendFile(__dirname + '/public/assets/conejito.jpg')

    } else {
        res.sendFile(__dirname + '/public/assets/voldemort.jpg')

    }

});


app.get('/*', (req, res) => {
    res.send("Esta pagina no existe")
});

// levantar servidor
const PORT = process.env.Port || 3000;

app.listen(PORT, () => {
    console.log(`Servidor inicializado en http://localhost:${PORT}/`)
})