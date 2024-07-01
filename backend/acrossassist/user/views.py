from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
import pyotp
from user.models import User
from user.serializers import (OTPSerializer, OTPVerificationSerializer,
                              PasswordSerializer, UserSerializer)

from user.SMSService import SMSManager

User = get_user_model()

def get_contact_type(phone_email):
    if "@" in phone_email and "." in phone_email:
        return "email"
    elif all(char.isdigit() or char in " +-()" for char in phone_email):
        return "phone"
    return "unknown"

def get_user_by_contact(phone_email):
    contact_type = get_contact_type(phone_email)
    if contact_type == "unknown":
        return None, {'error': 'Invalid phone number or email', 'status': status.HTTP_400_BAD_REQUEST}
    try:
        user = User.objects.get(**{contact_type: phone_email})
        return user, None
    except User.DoesNotExist:
        return None, {'error': 'User not found', 'status': status.HTTP_404_NOT_FOUND}
    

class LoginView(generics.GenericAPIView):
    serializer_class = PasswordSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_email = serializer.validated_data['phone_email']
        password = serializer.validated_data['password']

        user, error = get_user_by_contact(phone_email)
        if error:
            return Response({'error': error['error']}, status=error['status'])

        if not user.check_password(password):
            return Response({'error': 'Invalid password'}, status=status.HTTP_400_BAD_REQUEST)

        refresh = RefreshToken.for_user(user)
        return Response({'refresh': str(refresh), 'access': str(refresh.access_token)})


class OTPGenerateView(generics.GenericAPIView):
    serializer_class = OTPSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        if request.method == 'OPTIONS':
            print("OPTIONS ::: PREFLIGHT REQUEST")
            return Response(status=status.HTTP_200_OK)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_email = serializer.validated_data['phone_email']
        user, error = get_user_by_contact(phone_email)
        if error:
            return Response({'error': error['error']}, status=error['status'])

        # Generate OTP using pyotp
        totp = pyotp.TOTP('base32secret3232')  # This secret should be securely generated and stored
        otp = totp.now()
        user.otp = otp
        user.save()

        # Send the OTP to the user via SMS or Email (implementation not shown)
        print(f'OTP: {otp}')  # Logging the OTP for demonstration purposes

        try:
            # Send the OTP to the user via SMS
            sms_manager = SMSManager()
            message = f"Dear Customer, For login to Across Assist portal, please use OTP @__{otp}__@ to validate - Across Assist;"
            sms_manager.send_sms(phone_email, message)
        except Exception as e:
            return Response({'error': 'Failed to send OTP'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'message': 'OTP sent successfully'}, status=status.HTTP_200_OK)

class OTPVerifyView(generics.GenericAPIView):
    serializer_class = OTPVerificationSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        if request.method == 'OPTIONS':
            print("OPTIONS ::: PREFLIGHT REQUEST")
            return Response(status=status.HTTP_200_OK)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_email = serializer.validated_data['phone_email']
        otp = serializer.validated_data['otp']

        user, error = get_user_by_contact(phone_email)
        if error:
            return Response({'error': error['error']}, status=error['status'])

        totp = pyotp.TOTP('base32secret3232')  # Assuming 'base32secret3232' is a placeholder
        if totp.verify(otp):
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def getProfile(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)
        
    def updateProfile(self, request):
        user = request.user
        serializer = UserSerializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

