from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.utils import timezone
from django.conf import settings
import uuid

POLICY_TYPE_CHOICES = [
        ('travel', 'Travel Insurance'),
        ('health', 'Health Insurance'),
        ('2wheeler', '2 Wheeler Insurance'),
        ('other', 'Other Insurance'),
        ('home', 'Home Insurance')
    ]

STATUS_CHOICES = [
        ('active', 'Active'),
        ('expired', 'Expired'),
        ('cancelled', 'Cancelled'),
    ]

class Policy(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    description = models.TextField()
    policy_type = models.CharField(max_length=20, choices=POLICY_TYPE_CHOICES, default='other')
    base_premium = models.DecimalField(max_digits=10, decimal_places=2)
    duration_months = models.PositiveIntegerField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class PurchasedPolicy(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name='purchased_policies')
    policy = models.ForeignKey(Policy, on_delete=models.PROTECT, related_name='policy_available', null=True, blank=True)
    policy_number = models.CharField(max_length=50, unique=True, db_index=True)
    policy_details = models.JSONField(default=dict)  # Use JSONField for structured data
    effective_date = models.DateField()
    expiry_date = models.DateField()
    premium_amount = models.DecimalField(max_digits=10, decimal_places=2, db_index=True)


    policy_type = models.CharField(max_length=20, choices=POLICY_TYPE_CHOICES, default='other', db_index=True)

    STATUS_CHOICES = [
        ('active', 'Active'),
        ('expired', 'Expired'),
        ('cancelled', 'Cancelled'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active', db_index=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)  # Soft delete

    # available_amount = models.DecimalField(max_digits=10, decimal_places=2, db_index=True)

    class Meta:
        ordering = ['expiry_date']

    def __str__(self):
        return f"{self.policy_number} - {self.user.username}"

    def clean(self):
        if self.effective_date >= self.expiry_date:
            raise ValidationError("Expiry date must be after effective date.")
        if self.status not in [choice[0] for choice in self.STATUS_CHOICES]:
            raise ValidationError("Invalid status for policy.")

    def save(self, *args, **kwargs):
        self.full_clean()  # Call clean method before saving
        super().save(*args, **kwargs)

    def update_status_based_on_date(self):
        today = timezone.now().date()
        if today > self.expiry_date:
            self.status = 'expired'
        elif today < self.effective_date:
            self.status = 'active'  # Or another status that makes sense in this context
        self.save()

