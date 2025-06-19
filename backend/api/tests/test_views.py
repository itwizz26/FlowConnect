from django.forms import DateTimeField
from django.test import Client, TestCase
from django.urls import reverse
from rest_framework import status
from ..models import CountryList
from ..serializers import CountryListSerializer

# Let's test our endpoints
class CountryListViewsTest(TestCase):
    def setUp(self):
        self.sa =  CountryList.objects.create(
            name = 'Lesotho', currency = 'Maluti', code_two = 'ls', code_three = 'les', create_date = DateTimeField)
        self.zim = CountryList.objects.create(
            name = 'Zimbabwe', currency = 'Zim Dollar', code_two = 'zm', code_three = 'zim', create_date = DateTimeField)
    
    def test_country_code_view(self):
        client = Client()
        response = client.get(
            reverse('list_code', kwargs = {'code_two': self.sa.code_two}))

        country = CountryList.objects.get(code_two = self.sa.code_two)
        serializer = CountryListSerializer(country)
        self.assertEqual(response.data, serializer.data)
        # self.assertEqual(response.status_code, status.HTTP_201_CREATED) - failed assertion
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_country_alpha_view(self):
        client = Client()
        response = client.get(
            reverse('list_alpha', kwargs = {'code_three': self.zim.code_three}))

        country = CountryList.objects.get(code_three = self.zim.code_three)
        serializer = CountryListSerializer(country)
        self.assertEqual(response.data, serializer.data)
        # self.assertEqual(response.status_code, status.HTTP_201_CREATED) - failed assertion
        self.assertEqual(response.status_code, status.HTTP_200_OK)