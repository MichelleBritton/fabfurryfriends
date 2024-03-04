from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer
from fabfurryfriends.permissions import IsOwnerOrAdmin


class ProfileList(generics.ListAPIView):
    """
    List all profiles.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateAPIView):
    """
    Retrieve or update a profile if you're the owner.
    """
    permission_classes = [IsOwnerOrAdmin]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer