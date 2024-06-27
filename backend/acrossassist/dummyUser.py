import os
import django

# Set the Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'acrossassist.settings')  

django.setup()

from django.utils import timezone
from user.models import User  

# Ensure you provide a date_of_birth when creating a user
dummy_user = User.objects.create_user(
    email='dummy@example.com',
    password='password123',
    name='Dummy User',
    address='1234 Fictional Lane',
    date_of_birth=timezone.now().date() - timezone.timedelta(days=365*30),
    phone='+12345678901'
)

print(f"Dummy user created with ID: {dummy_user.id}")