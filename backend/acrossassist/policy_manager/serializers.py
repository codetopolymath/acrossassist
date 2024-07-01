from rest_framework import serializers
from .models import PurchasedPolicy, Policy

class PurchasedPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchasedPolicy
        fields = '__all__'  

class PolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = Policy
        fields = '__all__'