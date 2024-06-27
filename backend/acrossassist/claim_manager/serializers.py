from rest_framework import serializers
from .models import Claim

class ClaimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Claim
        fields = [
            'id', 'user', 'claim_type', 'incident_date', 'description', 'claimed_amount', 
            'approved_amount', 'policy', 'status', 'submitted_date', 
            'updated_date', 'supporting_documents'
        ]
        read_only_fields = ['submitted_date', 'updated_date', 'user']