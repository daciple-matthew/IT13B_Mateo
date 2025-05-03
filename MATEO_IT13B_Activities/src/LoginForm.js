
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class LoginForm extends JFrame {

    private JLabel usernameLabel, passwordLabel;
    private JTextField usernameField;
    private JPasswordField passwordField;
    private JButton loginButton;

    public LoginForm() {
        // Set up the frame
        setTitle("Login Form");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Create components
        usernameLabel = new JLabel("Username:");
        passwordLabel = new JLabel("Password:");
        usernameField = new JTextField(15);
        passwordField = new JPasswordField(15);
        loginButton = new JButton("Login");

        // Set layout
        setLayout(new GridLayout(3, 2, 5, 5));

        // Add components to frame
        add(usernameLabel);
        add(usernameField);
        add(passwordLabel);
        add(passwordField);
        add(new JLabel()); // Empty label for spacing
        add(loginButton);

        // Add action listener to the button
        loginButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String username = usernameField.getText();
                String password = new String(passwordField.getPassword());

                if (authenticate(username, password)) {
                    JOptionPane.showMessageDialog(LoginForm.this,
                            "Login Successful!", "Success",
                            JOptionPane.INFORMATION_MESSAGE);
                } else {
                    JOptionPane.showMessageDialog(LoginForm.this,
                            "Invalid username or password", "Error",
                            JOptionPane.ERROR_MESSAGE);
                }
            }
        });
    }

    private boolean authenticate(String username, String password) {
        try (BufferedReader reader = new BufferedReader(new FileReader("credentials.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] credentials = line.split(",");
                if (credentials.length == 2) {
                    String storedUsername = credentials[0].trim();
                    String storedPassword = credentials[1].trim();

                    if (storedUsername.equals(username) && storedPassword.equals(password)) {
                        return true;
                    }
                }
            }
        } catch (IOException e) {
            JOptionPane.showMessageDialog(this,
                    "Error reading credentials file", "Error",
                    JOptionPane.ERROR_MESSAGE);
        }
        return false;
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new LoginForm().setVisible(true);
            }
        });
    }
}
