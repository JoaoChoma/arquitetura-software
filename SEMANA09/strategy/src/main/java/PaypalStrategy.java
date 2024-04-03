public class PaypalStrategy implements PaymentStrategy {
    private String emailId;
    private String password;

    public PaypalStrategy(String email, String pwd){
        this.emailId=email;
        this.password=pwd;
    }

    @Override
    public void pay(int amount) {
        // process the payment with PayPal
        System.out.println(amount +" paid using Paypal.");
    }
}
