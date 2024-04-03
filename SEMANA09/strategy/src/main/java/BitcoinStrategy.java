public class BitcoinStrategy implements PaymentStrategy {
    private String walletAddress;

    public BitcoinStrategy(String walletAddress) {
        this.walletAddress = walletAddress;
    }

    @Override
    public void pay(int amount) {
        // Aqui, o pagamento com Bitcoin.
        // Para manter as coisas simples, vamos apenas imprimir uma mensagem.
        System.out.println(amount + " paid using Bitcoin to wallet " + walletAddress);
    }
}

