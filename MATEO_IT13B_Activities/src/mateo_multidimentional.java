/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package midterm;

/**
 *
 * @author User
 */
public class mateo_multidimentional {
        public static void main(String[] args) {
        int numbers[][] = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12}
        };

        for (int x = 0; x < numbers.length; x++) {
            System.out.print("The elements in Row" + (x + 1) + ": ");
            for (int y = 0; y < numbers[x].length; y++) {
                System.out.print(numbers[x][y] + " ");

            }

            System.out.println();
        }
    }

}


