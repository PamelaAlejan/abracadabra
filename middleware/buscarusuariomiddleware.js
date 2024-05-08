/*import usuarios from './../index.js';

export const buscarusuariomiddleware = (req, res, next) => {
    const usuarioBuscado = req.params.nombre
    console.log(usuarioBuscado)
    const encontrado = usuarios.find(nombre => nombre === usuarioBuscado);
    if (encontrado) {
        req.encontrado = true;
        req.usuarioEncontrado = encontrado;
    } else {
        req.encontrado = false;
    }
    next();
}
*/
