from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models
# Create your models here.


class Memorice(models.Model):
    acierto = models.CharField(max_length=200)
    tiempo = models.CharField(max_length=100)
    movimientos = models.CharField(max_length=100)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.usuario)


class Galeria(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    imagenes = models.ImageField(upload_to='imagenes-user')
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.usuario)
