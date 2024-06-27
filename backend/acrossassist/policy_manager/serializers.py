from rest_framework import serializers
from .models import PurchasedPolicy

class PurchasedPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchasedPolicy
        fields = '__all__'  