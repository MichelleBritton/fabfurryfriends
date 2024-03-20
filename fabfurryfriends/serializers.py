from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers


class CurrentUserSerializer(UserDetailsSerializer):
    profile_id = serializers.ReadOnlyField(source="profile.id")
    profile_image = serializers.ReadOnlyField(source="profile.image.url")
    is_admin_user = serializers.SerializerMethodField()

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + (
            "profile_id",
            "profile_image",
            "is_admin_user",
        )

    """
    credit: https://stackoverflow.com/questions/57992640/how-to-show-content-to-staff-user-only-using-react-and-drf
    """

    def get_is_admin_user(self, obj):
        return obj.is_staff  # this will return true for self.is_staff user
