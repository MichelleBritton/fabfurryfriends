from rest_framework import generics, permissions
from fabfurryfriends.permissions import IsOwnerOrAdmin
from .models import Advert
from .serializers import AdvertSerializer


class AdvertList(generics.ListCreateAPIView):
    """
    List adverts or create a post if logged in admin user
    """
    serializer_class = AdvertSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Advert.objects.all()

    # Check if the user is an admin
    def perform_create(self, serializer):
        if not self.request.user.is_staff:  
            raise PermissionDenied("You do not have permission to perform this action.")
        serializer.save(owner=self.request.user)