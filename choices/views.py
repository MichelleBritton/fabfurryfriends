from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import MaritalStatusSerializer
from .serializers import ClosedSerializer
from .serializers import HomeStatusSerializer
from .serializers import PreferredSexSerializer

@api_view(['GET'])
def marital_status_choices(request):
    choices = [
        {'value': 'single', 'label': 'Single'},
        {'value': 'married', 'label': 'Married'},
        {'value': 'widowed', 'label': 'Widowed'},
        {'value': 'divorced', 'label': 'Divorced'},
        {'value': 'separated', 'label': 'Separated'},
        {'value': 'cohabiting', 'label': 'Cohabiting'},        
    ]

    serializer = MaritalStatusSerializer(choices, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def closed_choices(request):
    choices = [
        {'value': 'no', 'label': 'No'},
        {'value': 'yes', 'label': 'Yes'},   
    ]

    serializer = ClosedSerializer(choices, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def home_status_choices(request):
    choices = [
        {'value': 'owned', 'label': 'Owned'},
        {'value': 'rented', 'label': 'Rented'},   
    ]

    serializer = HomeStatusSerializer(choices, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def preferred_sex_choices(request):
    choices = [
        {'value': 'either', 'label': 'Either'},
        {'value': 'dog', 'label': 'Dog'},  
        {'value': 'bitch', 'label': 'Bitch'},   
    ]

    serializer = PreferredSexSerializer(choices, many=True)
    return Response(serializer.data)