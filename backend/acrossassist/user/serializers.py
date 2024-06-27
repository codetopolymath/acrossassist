from user.models import User
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class OTPSerializer(serializers.Serializer):
    phone_email = serializers.CharField(max_length=255)

class OTPVerificationSerializer(serializers.Serializer):
    phone_email = serializers.CharField(max_length=255)
    otp = serializers.CharField(max_length=6)
    
    def validate(self, data):
        if not data['otp'].isdigit():
            raise serializers.ValidationError('OTP must be a 6-digit number.')
        return data

class PasswordSerializer(serializers.Serializer):
    phone_email = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=255)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('password', 'is_superuser', 'is_staff', 'is_active', 'groups', 'user_permissions', 'otp')
        read_only_fields = ('id', 'created_at', 'updated_at')
        


