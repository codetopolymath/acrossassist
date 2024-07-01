from django.urls import path
from policy_manager.views import PurchasedPolicyViewSet, PolicyViewSet

urlpatterns = [
    # POLICY
    path('manage-policies/', PolicyViewSet.as_view({'get': 'getPolicy', 'post': 'submitPolicy'}), name='user-policies'),
    path('manage-policies/<str:pk>/', PolicyViewSet.as_view({'put': 'editPolicy'}), name='edit-policy'),

    # PURCHASED POLICIES
    path('manage-purchased-policy/', PurchasedPolicyViewSet.as_view({'get': 'getPurchasedPolicy', 'post': 'submitPurchasedPolicy'}), name='user-policies'),
    path('manage-purchased-policy/<str:pk>/', PurchasedPolicyViewSet.as_view({'put': 'editPurchasedPolicy'}), name='edit-policy'),

]
