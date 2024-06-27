import os
import django
from datetime import date

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'your_project_name.settings')
django.setup()

from acrossassist.claim_manager.models import Claim
from acrossassist.policy_manager.models import PurchasedPolicy
from acrossassist.user.models import User

user = User.objects.get(username='your_username')
policy = PurchasedPolicy.objects.get(id=1)

Claim.objects.create(
    user=user,
    claim_type='medical',
    incident_date=date(2020, 5, 15),
    description='Medical expenses for treatment of flu',
    claimed_amount=1000.00,
    policy=policy,
    status='submitted'
)

print(f"Claim created successfully for user {user.username}!")