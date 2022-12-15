from django.shortcuts import render
from .forms import *
from .models import *
import os
from django.http import HttpResponse
from django.views.generic import View
from django.http import JsonResponse
from django.shortcuts import redirect


def subir_imagenes(request):
    data2 = {
        'form': GaleriaForm,
    }
    if request.method == 'POST':
        print("ESTOY ADENTRO DEL IFFF")
        formulario = GaleriaForm(data=request.POST)
        if formulario.is_valid():
            post = formulario.save(commit=False)
            post.imagenes = request.POST[""]
            post.usuario_id = request.user.id
            formulario.save()
        else:
            formulario = MemoriceForm()
    return render(request, 'app/subir_imagenes.html', data2)
    # return render(request, 'app/subir_imagenes.html')


def crucigrama(request):
    return render(request, 'app/crucigrama.html')


def index(request):
    return render(request, 'app/index.html')


def login(request):
    return render(request, 'app/login.html')
###################### MEMORICE #######################
################ NO TOCAR DE MOMENTO ##################


def memorama(request):
    data = {
        'form': MemoriceForm,
    }
    if request.method == 'POST':
        print("ESTOY ADENTRO DEL IFFF")
        formulario = MemoriceForm(data=request.POST)
        if formulario.is_valid():
            post = formulario.save(commit=False)
            post.acierto = request.POST["acierto"]
            post.tiempo = request.POST["tiempo"]
            post.movimientos = request.POST["movimientos"]
            post.usuario_id = request.user.id
            formulario.save()
        else:
            formulario = MemoriceForm()
    return render(request, 'app/memorama.html', data)
    # return render(request, 'app/memorama.html')
