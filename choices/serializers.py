from rest_framework import serializers

class MaritalStatusSerializer(serializers.Serializer):
    value = serializers.CharField()
    label = serializers.CharField()


class TestSerializer(serializers.Serializer):
    value = serializers.CharField()
    label = serializers.CharField()