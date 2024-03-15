from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import MaritalStatusSerializer

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