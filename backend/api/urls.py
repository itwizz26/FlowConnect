from django.urls import path
from . import views

urlpatterns = [
    path('countrylist/', views.CountryListCreate.as_view(), name='list_all'),
    path('countrylist/code/<str:code_two>/', views.CountryListCodeRetrieveUpdate.as_view(), name='list_code'),
    path('countrylist/alpha/<str:code_three>/', views.CountryListAlphaRetrieveUpdate.as_view(), name='list_alpha'),
    path('countrylist/<int:pk>/', views.CountryListIdRetrieveUpdate.as_view(), name='list_pk'),
]