class LogManager {
    constructor() {
        this.logs = [];
    }

    log(message) {
        this.logs.push(message);
        console.log("Log: " + message);
    }

    static getInstance() {
        if (!LogManager.instance) {
            LogManager.instance = new LogManager();
        }
        return LogManager.instance;
    }
}

// Exemplo de uso
const logger1 = LogManager.getInstance();
const logger2 = LogManager.getInstance();

logger1.log("Mensagem de log 1");
logger2.log("Mensagem de log 2");

console.log(logger1 === logger2); // Saída: true, pois ambos os loggers se referem à mesma instância
