from rest_framework import generics, permissions
from django_filters.rest_framework import DjangoFilterBackend
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
    filter_backends = [
        DjangoFilterBackend,
    ]
    filterset_fields = ["advert_id"]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class AdoptorDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve an adoptor
    Destroy an adoptor
    """

    permission_classes = [IsOwnerOrReadOnly]
    queryset = Adoptor.objects.all()
    serializer_class = AdoptorSerializer
