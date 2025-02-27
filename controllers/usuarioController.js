const UsuarioService = require("../services/usuarioService");
class UsuarioController{
    static async listarUsuarios(req, res) {
        try {
            let lista = await UsuarioService.listarUsuarios();
            res.json(lista);
        } catch (e) {
            res.json({error:"error en la peticion"})
        }
    }
    static async crearUsuario(req, res) {
        try {
            let {nombre,correo,contrasena}=req.body
            let usuario = await UsuarioService.crearUsuario(nombre, correo, contrasena);
            res.json(usuario);
        } catch (e) {
            res.json({ error: "error en la peticion" });
        }
    }
}
module.exports = UsuarioController;