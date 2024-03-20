import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class LogManagerTest {
    LogManager logger1 = LogManager.getInstance();
    LogManager logger2 = LogManager.getInstance();

    @Test
    public void testLogManager(){
        logger1.log("Mensagem de log 1");
        logger2.log("Mensagem de log 2");

        // Verificar se logger1 e logger2 referem-se à mesma instância
        assertEquals(logger1,logger2);

        // Verificar se a lista de logs contém as mensagens registradas
        assertEquals(2, logger1.getLogs().size());
        assertEquals("Mensagem de log 1", logger1.getLogs().get(0));
        assertEquals("Mensagem de log 2", logger1.getLogs().get(1));
    }

}
