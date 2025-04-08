import java.io.FileWriter;
import java.io.IOException;
import java.io.File;

public class CreateAndWriteFile {

    public static void main(String[] args) throws IOException {
        String[] phrases = {
            "I love you!",
            "Gwapa ko!",
            "Buotan si Maam"
        };
        
        File myFile = new File("C:\\Users\\dacip\\Desktop\\file_handling.txt");

        if (myFile.createNewFile()) {
            System.out.println("File created: " + myFile.getName());
        } else {
            System.out.println("File already exists.");
        }

        try (FileWriter myWriter = new FileWriter(myFile)) {
            System.out.println("\nEncryption Results (Caesar Shift +3):");
            System.out.println("----------------------------------");
            
            for (int i = 0; i < phrases.length; i++) {
                String original = phrases[i];
                String encrypted = encrypt(original, 3);
                
                // Display in console
                System.out.println((i+1) + ". Original : " + original);
                System.out.println("   Encrypted: " + encrypted);
                System.out.println();
                
                // Write to file
                myWriter.write((i+1) + ". Original : " + original + "\n");
                myWriter.write("   Encrypted: " + encrypted + "\n\n");
            }
            
            System.out.println("All messages successfully encrypted and saved to file!");
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }
    }

    public static String encrypt(String text, int shift) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            if (Character.isLetter(c)) {
                char base = Character.isLowerCase(c) ? 'a' : 'A';
                c = (char)((c - base + shift) % 26 + base);
            }
            result.append(c);
        }
        return result.toString();
    }
}