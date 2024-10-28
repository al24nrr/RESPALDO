package com.example.demo.dao;

import com.example.demo.models.Usuario;
import java.util.List;

public interface UsuarioDAO {
    Usuario obtenerUsuarioPorId(int id);
    List<Usuario> obtenerTodosLosUsuarios();
    void guardarUsuario(Usuario usuario);
    void actualizarUsuario(Usuario usuario);
    void eliminarUsuario(int id);
}
