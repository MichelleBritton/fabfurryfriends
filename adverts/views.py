from rest_framework import generics, permissions, filters
from rest_framework.exceptions import PermissionDenied
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
    filter_backends = [
        filters.SearchFilter,
    ]
    search_fields = [
        'dog_name',
        'breed',
        'content',
    ]

    # Check if the user is an admin
    def perform_create(self, serializer):
        if not self.request.user.is_staff:  
            raise PermissionDenied("You do not have permission to perform this action.")
        serializer.save(owner=self.request.user)


class AdvertDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve an advert and edit or delete it if you are admin
    """
    serializer_class = AdvertSerializer
    permission_classes = [IsOwnerOrAdmin]
    queryset = Advert.objects.all()