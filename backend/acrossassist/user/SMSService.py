import os
import requests
import logging
from django.conf import settings

class SMSCredentials:
    USERID = os.environ.get('SMS_USERID')
    PASSWORD = os.environ.get('SMS_PASSWORD')
    SENDER_ID = os.environ.get('SMS_SENDER_ID')
    API_URL = os.environ.get('SMS_API_URL')

class SMS:
    def __init__(self, _id):
        self.Id = _id

class SMSManager:
    def send_sms(self, mobile_number, message):
        try:
            sms = self.save_new_sms(mobile_number, message)
            send_to = "91" + mobile_number
            payload = {
                "method": "sendMessage",
                "send_to": send_to,
                "msg": message,
                "password": SMSCredentials.PASSWORD,
                "userid": SMSCredentials.USERID,
                "v": 1.1,
                "msg_type": "TEXT",
                "auth_scheme": "PLAIN",
                "mtype": "TXT",
                "subdatatype": "MU",
                "Response": "Y",
                "mask": SMSCredentials.SENDER_ID
            }
            response = requests.post(SMSCredentials.API_URL, data=payload)
            if response.status_code == 200:
                try:
                    response_data = response.json()
                    if response_data.get('status') == 'success':
                        logging.info('Message sent successfully!')
                    else:
                        logging.error('Failed to send message: %s', response_data.get('message'))
                except ValueError:
                    logging.error('Failed to parse response JSON. Response content: %s', response.content)
                    print(response.content)
            else:
                logging.error('Failed to send message. Status code: %d', response.status_code)
            self.save_response(sms.Id, response.content)
        except Exception as e:
            logging.exception('An error occurred while sending SMS: %s', str(e))

    def save_new_sms(self, mobile_number, message):
        # Implement saving new SMS logic here and return the SMS object
        # For simplicity, I'm returning a dummy SMS object with an ID
        return SMS(123)

    def save_response(self, sms_id, response_content):
        # Implement saving response logic here
        pass

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def send_sms_message(number, var):
    """
    Function to send SMS message.
    
    :param number: The recipient's phone number
    :param var: The variable to be included in the SMS message
    :return: None
    """
    sms_manager = SMSManager()
    message = f"Dear Customer, For login to Across Assist portal, please use OTP @__{var}__@ to validate - Across Assist;"
    sms_manager.send_sms(number, message)