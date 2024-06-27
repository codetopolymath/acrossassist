from django.db import models
from django.conf import settings
import uuid
from policy_manager.models import PurchasedPolicy

class Claim(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    #claim_id = models.CharField(max_length=20, unique=True) # can be used to generate a unique claim id
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name='purchased_claims')

    # Claim details
    claim_type = models.CharField(max_length=20, choices=[
        ('medical', 'Medical'),
        ('baggage', 'Baggage'),
        ('trip_cancellation', 'Trip Cancellation'),
        ('travel_delay', 'Travel Delay'),  
        ('other', 'Other'),  
    ], default='travel')
    incident_date = models.DateField()
    description = models.TextField()

    # Amount-related fields (consider using Decimal for precision)
    claimed_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Amount claimed by user [asked by user]
    approved_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Amount approved by insurer [filled by insurer]

    # Policy-related information (if applicable)
    policy = models.ForeignKey(PurchasedPolicy, on_delete=models.PROTECT, null=True, blank=True)

    # Updates and Notes (for internal use) on the claim ::: supporting document [filled & uploaded by insurer]
    notes = models.TextField(blank=True, null=True)
    updates = models.TextField(blank=True, null=True)
    supporting_documents = models.FileField(upload_to='supporting_documents/', null=True, blank=True)

    # Claim status and tracking
    status = models.CharField(max_length=20, choices=[
        ('submitted', 'Submitted'),
        ('pending', 'Pending Review'),
        ('approved', 'Approved'),
        ('denied', 'Denied'),
        ('partially_approved', 'Partially Approved'),
    ], default='submitted')
    created_at = models.DateTimeField(auto_now_add=True)  # claim submitted date
    updated_at = models.DateTimeField(auto_now=True)  # claim updated date

    def __str__(self):
        return f"{self.get_claim_type_display()} claim on {self.incident_date}"