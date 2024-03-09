from rest_framework import serializers
from adverts.models import Advert


class AdvertSerializer(serializers.ModelSerializer):
    """ 
    AdvertSerializer class which inherits from ModelSerializer
    Specify owner as a readonly field so it can't be edited
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Advert
        fields = [
            'id', 'owner', 'created_at', 'updated_at', 'dog_name',
            'breed', 'age', 'sex', 'quick_fact_1', 'quick_fact_2', 'quick_fact_3', 
            'quick_fact_4', 'quick_fact_5', 'content', 'image', 'is_owner', 
        ]