const { Usuario } = require("../models");

class UsuarioService{
    static async listarUsuarios() {
        try {
           return await Usuario.findAll(); 
        }
        catch (e) {
            console.log("error en el servicio");
        }
    }
    static async crearUsuario(nombre, correo, contrasena) {
        try {
            return await Usuario.create({nombre, correo, contrasena})
        }
        catch (e) {
            console.log("error en el servicio al guardar");
        }
    }
    static async buscarUsuario(correo) {
        try {
             return await Usuario.findOne({where:{correo}})
        } catch (e) {
            console.log("error en el servicio buscar");
        }
       
    }
    static async eliminarUsuario(id) {
        try {
            let resultadoB = await Usuario.destroy({ where: { id } });
            return "registro eliminado";
        } catch (e) {
            console.log("error en el servicio al eliminar");
        }
        
    }
    static async actualizarUsuario(id,datos) {
       try {
           return await Usuario.update(datos, { where: { id } });
           //let uBuscado=await Usuario.findByPk(id);
           //return await uBuscado.update(datos)
        } catch (e) {
            
        } 
    }
}
module.exports=UsuarioService