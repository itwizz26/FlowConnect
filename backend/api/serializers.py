from rest_framework import serializers
from .models import CountryList

class CountryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CountryList
        fields = ["id", "name", "currency", "code_two", "code_three", "create_date"]
