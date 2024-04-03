import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ShoppingCartTesting {

    @Test
    public void testPayByPayPal() {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem(new Item("1234", 100));
        cart.addItem(new Item("5678", 200));

        // Criando uma versão simplificada da estratégia PayPal para teste
        PaymentStrategy fakePaypalStrategy = amount -> assertEquals(300, amount, "O valor pago pelo PayPal não está correto.");
        cart.pay(fakePaypalStrategy);
    }

    @Test
    public void testPayByCreditCard() {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem(new Item("1234", 50));
        cart.addItem(new Item("5678", 150));

        // Criando uma versão simplificada da estratégia de Cartão de Crédito para teste
        PaymentStrategy fakeCreditCardStrategy = amount -> assertEquals(200, amount, "O valor pago com o cartão de crédito não está correto.");
        cart.pay(fakeCreditCardStrategy);
    }
}

