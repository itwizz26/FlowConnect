from django.forms import DateTimeField
from django.test import TestCase
from ..models import CountryList

class CountryListTest(TestCase):
    def setUp(self):
        CountryList.objects.create(
            name = 'United States of America', currency = 'Dollar', code_two = 'us', code_three = 'sua', create_date = DateTimeField)
        CountryList.objects.create(
            name = 'France', currency = 'Franc', code_two = 'fr', code_three = 'fra', create_date = DateTimeField)
        
    def test_country_list(self):
        us = CountryList.objects.get(name = 'United States of America')
        fr = CountryList.objects.get(name = 'France')
        self.assertEqual(
            # south_africa.__str__(), "South Afrca") - failed assertion
            us.__str__(), "United States of America")
        self.assertEqual(
            fr.__str__(), "France")
