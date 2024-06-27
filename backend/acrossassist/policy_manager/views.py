from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import PurchasedPolicy
from .serializers import PurchasedPolicySerializer

class PurchasedPolicyViewSet(viewsets.ModelViewSet):

    queryset = PurchasedPolicy.objects.all()
    serializer_class = PurchasedPolicySerializer
    permission_classes = [IsAuthenticated]

    def getPolicies(self, request):
        try:
            user_policies = PurchasedPolicy.objects.filter(user=request.user)
            serializer = PurchasedPolicySerializer(user_policies, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
        
    def submitPolicy(self, request):
        try:
            serializer = PurchasedPolicySerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data, status=201)
            return Response(serializer.errors, status=400)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
            