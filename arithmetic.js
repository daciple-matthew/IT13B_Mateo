import java.util.Scanner;

public class NumberOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get user input
        System.out.print("Enter the first number: ");
        int num1 = scanner.nextInt();

        System.out.print("Enter the second number: ");
        int num2 = scanner.nextInt();

        System.out.print("Enter the third number: ");
        int num3 = scanner.nextInt();

        // Perform the operations
        int result1 = (num1 * num2) + num3;
        int result2 = (num1 - num2) % num3;
        int result3 = (num1 + num2 + num3) / 3;
        int result4 = (num1 * num3) - (num2 * num2);

        // Display the results
        System.out.println("\nResults:");
        System.out.println("1. (num1 * num2) + num3 = " + result1);
        System.out.println("2. (num1 - num2) % num3 = " + result2);
        System.out.println("3. (num1 + num2 + num3) / 3 = " + result3);
        System.out.println("4. (num1 * num3) - (num2 * num2) = " + result4);

        scanner.close();
    }
}
