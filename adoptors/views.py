from rest_framework import generics, permissions
from fabfurryfriends.permissions import IsOwnerOrReadOnly
from .models import Adoptor
from .serializers import AdoptorSerializer


class AdoptorList(generics.ListCreateAPIView):
    """
    List all potential adoptors
    Create a potential adoptor if user is logged in.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Adoptor.objects.all()
    serializer_class = AdoptorSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

