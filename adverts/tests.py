from django.contrib.auth.models import User
from .models import Advert
from rest_framework import status
from rest_framework.test import APITestCase


class AdvertListViewTests(APITestCase):
    def setUp(self):
        User.objects.create_user(username='mich', password='pass')
  
    def test_can_list_adverts(self):
        mich = User.objects.get(username='mich')
        Advert.objects.create(owner=mich, dog_name='dog name')
        response = self.client.get('/api/adverts/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)   
        print(response.data)
        print(len(response.data))     


class PostDetailViewTests(APITestCase):
    def setUp(self):
        mich = User.objects.create_user(username='mich', password='pass')
        matt = User.objects.create_user(username='matt', password='pass')
        Advert.objects.create(
            owner=mich, dog_name='Tilly', content='mich content'
        )
        Advert.objects.create(
            owner=matt, dog_name='Boris', content='matt content'
        )

    def test_can_retrieve_post_using_valid_id(self):
        response = self.client.get('/api/adverts/1/')
        self.assertEqual(response.data['dog_name'], 'Tilly')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_cant_retrieve_post_using_invalid_id(self):
        response = self.client.get('/api/adverts/999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    