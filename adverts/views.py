from rest_framework import generics, permissions
from fabfurryfriends.permissions import IsOwnerOrAdmin
from .models import Advert
from .serializers import AdvertSerializer


class AdvertCreate(generics.CreateAPIView):
    """
    Create an advert if logged in admin user
    The perform_create method associates the post with the logged in admin user.
    """
    serializer_class = AdvertSerializer
    permission_classes = [IsOwnerOrAdmin]
    queryset = Advert.objects.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)