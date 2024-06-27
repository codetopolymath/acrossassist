from django.urls import path
from user.views import OTPGenerateView, OTPVerifyView, LoginView, UserViewSet

urlpatterns = [
    # OTP BASED AUTHENTICATION
    path('otp/generate/', OTPGenerateView.as_view(), name='otp_generate'),
    path('otp/verify/', OTPVerifyView.as_view(), name='otp_verify'),

    # PASSWORD BASE AUTHENTICATION
    path('login/', LoginView.as_view(), name='login'),

    # USER MANAGEMENT
    path('profile/', UserViewSet.as_view({'get': 'getProfile', 'patch': 'updateProfile'}), name='profile'),

]