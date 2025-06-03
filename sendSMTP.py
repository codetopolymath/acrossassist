import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_test_email(recipient_email):
    # Email configuration
    smtp_server = "email-smtp.ap-south-1.amazonaws.com"
    port = 2587
    sender_email = "ticketsupport@pinnacle.in"
    username = "AKIAU6GDWTVU7YAOI4XV"
    password = "BCgVuHdOJmOqxUmqWoXlxpYfbcxVEXFYolSF/xvqJEoO"

    # Create message
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = recipient_email
    message["Subject"] = "Test Email"

    # Add body to email
    body = "Hello there"
    message.attach(MIMEText(body, "plain"))

    # Create SMTP session
    try:
        with smtplib.SMTP(smtp_server, port) as server:
            server.starttls()  # Secure the connection
            server.login(username, password)
            server.send_message(message)
        print("Test email sent successfully!")
    except Exception as e:
        print(f"Error sending email: {e}")

# Usage
recipient = "rohit.ghawale@pinnacle.in"  # Replace with the actual recipient email
send_test_email(recipient)