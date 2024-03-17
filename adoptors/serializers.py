from django.db import IntegrityError
from rest_framework import serializers
from .models import Adoptor


class AdoptorSerializer(serializers.ModelSerializer):
    """ 
    Serializer for the Adoptor model
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    advert_name = serializers.ReadOnlyField(source='advert.dog_name')

    class Meta:
        model = Adoptor
        fields = [
            'id', 'owner', 'created_at', 'advert', 'advert_name', 
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({'detail': 'possible duplicate'})

       