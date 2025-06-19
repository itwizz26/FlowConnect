from django.db import models

# Create your models here.
class CountryList(models.Model):
    name = models.CharField(max_length=255, unique=True)
    currency = models.CharField(max_length=255)
    code_two = models.CharField(max_length=2)
    code_three = models.CharField(max_length=3)
    create_date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name
