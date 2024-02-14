import controller.UsuarioController;
import model.Usuario;
import view.UsuarioView;

public class Main {
    public static void main(String[] args) {
        // Criar um modelo de usuário
        Usuario usuario = new Usuario("João", "joao@email.com");

        // Criar uma visão para exibir detalhes do usuário
        UsuarioView usuarioView = new UsuarioView();

        // Criar um controlador para gerenciar operações relacionadas ao usuário
        UsuarioController usuarioController = new UsuarioController(usuario, usuarioView);

        // Exibir detalhes do usuário antes da atualização
        usuarioController.exibirDetalhesUsuario();

        
        // Atualizar detalhes do usuário
        usuarioController.atualizarDetalhesUsuario("Maria", "maria@email.com");

        // Exibir detalhes do usuário após a atualização
        usuarioController.exibirDetalhesUsuario();
    }
}
