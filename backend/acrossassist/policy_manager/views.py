from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import PurchasedPolicy, Policy
from .serializers import PurchasedPolicySerializer, PolicySerializer

class PolicyViewSet(viewsets.ModelViewSet):

    queryset = Policy.objects.all()
    serializer_class = PolicySerializer

    def getPolicy(self, request):
        try:
            policies = Policy.objects.all()
            serializer = PolicySerializer(policies, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
        
    def submitPolicy(self, request):
        try:
            serializer = PolicySerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=201)
            return Response(serializer.errors, status=400)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
        
    def editPolicy(self, request, pk=None):
        try:
            policy = Policy.objects.get(id=pk)
            serializer = PolicySerializer(policy, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            return Response(serializer.errors, status=400)
        except Exception as e:
            return Response({"error": str(e)}, status=400)


class PurchasedPolicyViewSet(viewsets.ModelViewSet):

    queryset = PurchasedPolicy.objects.all()
    serializer_class = PurchasedPolicySerializer
    permission_classes = [IsAuthenticated]

    def getPurchasedPolicy(self, request):
        try:
            user_policies = PurchasedPolicy.objects.filter(user=request.user)
            serializer = PurchasedPolicySerializer(user_policies, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
        
    def submitPurchasedPolicy(self, request):
        try:
            serializer = PurchasedPolicySerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data, status=201)
            return Response(serializer.errors, status=400)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
        
    def editPurchasedPolicy(self, request, pk=None):
        try:
            policy = PurchasedPolicy.objects.get(policy_number=pk)
            serializer = PurchasedPolicySerializer(policy, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            return Response(serializer.errors, status=400)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
