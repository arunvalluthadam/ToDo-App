from rest_framework import serializers
from .models import ToDoContent

class ToDoContentSerializer(serializers.ModelSerializer):
	class Meta:
		model = ToDoContent
		field = ('id', 'title', 'slug', 'content', 'date')