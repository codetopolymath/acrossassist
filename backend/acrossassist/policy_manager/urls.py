from django.urls import path
from policy_manager.views import PurchasedPolicyViewSet

urlpatterns = [
    path('manage-policies/', PurchasedPolicyViewSet.as_view({'get': 'getPolicies', 'post': 'submitPolicy'}), name='user-policies'),
]
