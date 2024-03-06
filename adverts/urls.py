from django.urls import path
from adverts import views


urlpatterns = [
    path('adverts/', views.AdvertList.as_view()),
]