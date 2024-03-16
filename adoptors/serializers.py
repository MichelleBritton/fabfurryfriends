from django.db import IntegrityError
from rest_framework import serializers
from .models import Adoptor


class AdoptorSerializer(serializers.ModelSerializer):
    """ 
    Serializer for the Adoptor model
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Adoptor
        fields = [
            'id', 'owner', 'created_at', 'adopt'
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({'detail': 'possible duplicate'})