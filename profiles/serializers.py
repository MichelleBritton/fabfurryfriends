from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    """
    ProfileSerializer class which inherits from ModelSerializer
    Specify owner as a readonly field so it can't be edited
    """

    owner = serializers.ReadOnlyField(source="owner.username")
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context["request"]
        return request.user == obj.owner

    class Meta:
        model = Profile
        fields = [
            "id",
            "owner",
            "created_at",
            "updated_at",
            "name",
            "email",
            "phone",
            "address",
            "marital_status",
            "age",
            "children",
            "children_age",
            "daily_life",
            "other_pets",
            "describe_house",
            "describe_garden",
            "home_status",
            "where_dog_live",
            "dog_left_alone",
            "previously_owned",
            "why",
            "sex",
            "preferred_age",
            "when",
            "activities",
            "image",
            "is_owner",
        ]
