from django import forms
from .models import *


# MEMORICE


class MemoriceForm(forms.ModelForm):
    acierto = forms.CharField(label='Cantidad de aciertos', widget=forms.TextInput(
        attrs={

            'placeholder': 'Ingresa cantidad de aciertos',
            'id': 'total_acierto'
        }))

    tiempo = forms.CharField(label='Cantidad de tiempo', widget=forms.TextInput(
        attrs={

            'placeholder': 'Ingresa cantidad de tiempo',
            'id': 'total_tiempo'
        }))

    movimientos = forms.CharField(label='Cantidad de movimientos', widget=forms.TextInput(
        attrs={

            'placeholder': 'Ingresa cantidad de movimientos',
            'id': 'total_movimientos'
        }))

    class Meta:
        model = Memorice
        fields = 'acierto', 'tiempo', 'movimientos'


class GaleriaForm(forms.ModelForm):
    class Meta:
        model = Galeria
        fields = ('imagenes',)
