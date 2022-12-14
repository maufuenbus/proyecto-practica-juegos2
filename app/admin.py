from django.contrib import admin
from .models import *
# Register your models here.


# MEMORICE


class MemoriceAdmin(admin.ModelAdmin):
    list_display = ["usuario", "acierto", "tiempo",
                    "movimientos", "timestamp"]


admin.site.register(Memorice, MemoriceAdmin)
admin.site.register(Galeria)
