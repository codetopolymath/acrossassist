import os, django
from django.conf import settings
from django.utils import timezone
from datetime import timedelta

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'acrossassist.settings')
django.setup()

from policy_manager.models import PurchasedPolicy
from user.models import User

user = User.objects.get(phone='8459188977')

dummy_policy = PurchasedPolicy.objects.create(
    policy_number='POLICY123456',
    user=user,
    policy_details={
        'insurer': 'ICICI Lombard',
        'sum_insured': 1000000,
        'plan': 'Gold'
    },
    effective_date=timezone.now().date(),
    expiry_date=timezone.now().date() + timedelta(days=365),
    premium_amount=5000,
    policy_type='health',
    status='active'
)

print('Dummy policy created with ID:', dummy_policy.id)