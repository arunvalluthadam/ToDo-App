from django.contrib import admin
from .models import ToDoContent

# Register your models here.
class ToDoContentAdmin(admin.ModelAdmin):
	model = ToDoContent
	list_display = ['title', 'content', 'date']

admin.site.register(ToDoContent, ToDoContentAdmin)