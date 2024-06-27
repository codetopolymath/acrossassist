from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('user.urls')),
    path('policy/', include('policy_manager.urls')),
    path('claim/', include('claim_manager.urls')),
]
