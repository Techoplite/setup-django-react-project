
from .models import TestModel
from rest_framework import viewsets, permissions
from .serializers import TestModelSerializer


class TestModelViewset(viewsets.ModelViewSet):
    queryset = TestModel.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = TestModelSerializer
