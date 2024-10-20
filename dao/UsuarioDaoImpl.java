package com.example.demo.dao;

import com.example.demo.models.Usuario;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class UsuarioDaoImpl implements UsuarioDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Usuario obtenerUsuarioPorId(int id) {
        return entityManager.find(Usuario.class, id);
    }

    @Override
    public List<Usuario> obtenerTodosLosUsuarios() {
        String query = "FROM Usuario";
        return entityManager.createQuery(query, Usuario.class).getResultList();
    }

    @Override
    public void guardarUsuario(Usuario usuario) {
        entityManager.persist(usuario);
    }

    @Override
    public void actualizarUsuario(Usuario usuario) {
        entityManager.merge(usuario);
    }

    @Override
    public void eliminarUsuario(int id) {
        Usuario usuario = obtenerUsuarioPorId(id);
        if (usuario != null) {
            entityManager.remove(usuario);
        }
    }
}
