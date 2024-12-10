/**
 * Incometax
 */
import java.util.Scanner;;
public class Incometax {
public static void main(String[] args) {
    System.out.println("Enter Your income to find out your tax");
    Scanner s = new Scanner(System.in);
    float num1 = s.nextFloat();
    s.close();
    TaxFinder(num1);
}
public static void TaxFinder(float income){
if(income <= 10000){
    System.out.println("Your tax rate is 0% and your taxed income is 0");
}
else if(income > 10000 && income <= 40000){
double taxedincome = income * 0.10;
System.out.println("Your tax rate is 10% and your taxed income is "+taxedincome);
}
else if(income > 40000 && income <= 80000){
double taxedincome = income * 0.20;
System.out.println("Your tax rate is 20% and your taxed income is "+taxedincome);
}
else{
double taxedincome = income * 0.30;
System.out.println("Your tax rate is 30% and your taxed income is "+taxedincome);
}
}
    
}