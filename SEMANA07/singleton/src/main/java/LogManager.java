import java.util.ArrayList;
import java.util.List;
public class LogManager {
        private static LogManager instance;
        private List<String> logs;

        // Construtor privado para evitar instanciamento direto
        private LogManager() {
            logs = new ArrayList<>();
        }

        // Método estático para obter a instância única do LogManager
        public static LogManager getInstance() {
            if (instance == null) {
                instance = new LogManager();
            }
            return instance;
        }

        // Método para registrar uma mensagem de log
        public void log(String message) {
            logs.add(message);
            System.out.println("Log: " + message);
        }

        // Método para obter todos os logs registrados
        public List<String> getLogs() {
            return logs;
        }
    }
