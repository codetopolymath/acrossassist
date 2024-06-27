from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FileUploadParser

from .models import Claim
from .serializers import ClaimSerializer

class ClaimViewSet(viewsets.ModelViewSet):

    queryset = Claim.objects.all()
    serializer_class = ClaimSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FileUploadParser]

    def getClaims(self, request):
        try:
            claims = Claim.objects.filter(user=request.user)
            serializer = ClaimSerializer(claims, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
    def submitClaim(self, request):
        try:
            serializer = ClaimSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)