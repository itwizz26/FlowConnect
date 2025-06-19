from django.shortcuts import render
from rest_framework import generics
from .models import CountryList
from .serializers import CountryListSerializer

# Exposing endpoints
class CountryListCreate(generics.ListCreateAPIView):
    queryset = CountryList.objects.all()
    serializer_class = CountryListSerializer

class CountryListCodeRetrieveUpdate(generics.RetrieveAPIView):
    queryset = CountryList.objects.all()
    serializer_class = CountryListSerializer
    lookup_field = 'code_two'

class CountryListAlphaRetrieveUpdate(generics.RetrieveAPIView):
    queryset = CountryList.objects.all()
    serializer_class = CountryListSerializer
    lookup_field = 'code_three'

class CountryListIdRetrieveUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = CountryList.objects.all()
    serializer_class = CountryListSerializer
    lookup_field = 'pk'
