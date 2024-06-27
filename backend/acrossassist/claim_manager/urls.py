from django.urls import path
from claim_manager.views import ClaimViewSet

urlpatterns = [
    path('manage-claims/', ClaimViewSet.as_view({'get': 'getClaims', 'post': 'submitClaim'}), name='user-claims'),
]