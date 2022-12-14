from django.urls import path
from .views import *


urlpatterns = [
    path('', index, name="index"),
    path('memorama/', memorama, name="memorama"),
    path('subir_imagenes/', subir_imagenes, name="subir_imagenes"),
    path('crucigrama/', crucigrama, name="crucigrama"),
]
