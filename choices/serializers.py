from rest_framework import serializers

class MaritalStatusSerializer(serializers.Serializer):
    value = serializers.CharField()
    label = serializers.CharField()


class ClosedSerializer(serializers.Serializer):
    value = serializers.CharField()
    label = serializers.CharField()


class HomeStatusSerializer(serializers.Serializer):
    value = serializers.CharField()
    label = serializers.CharField()


class PreferredSexSerializer(serializers.Serializer):
    value = serializers.CharField()
    label = serializers.CharField()