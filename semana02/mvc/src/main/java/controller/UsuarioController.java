package controller;

import model.Usuario;
import view.UsuarioView;

public class UsuarioController {
    private Usuario usuario;
    private UsuarioView usuarioView;

    public UsuarioController(Usuario usuario, UsuarioView usuarioView) {
        this.usuario = usuario;
        this.usuarioView = usuarioView;
    }

    public void atualizarDetalhesUsuario(String nome, String email) {
        usuario.setNome(nome);
        usuario.setEmail(email);
    }

    public void exibirDetalhesUsuario() {
        usuarioView.mostrarDetalhesUsuario(usuario.getNome(), usuario.getEmail());
    }
}

