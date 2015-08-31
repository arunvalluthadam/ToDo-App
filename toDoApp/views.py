from django.shortcuts import render
from rest_framework import generics
from models import ToDoContent
from serializer import ToDoContentSerializer

# Create your views here.
def home(request):
	return render(request, "index.html")


class ToDoContentList(generics.ListCreateAPIView):
	queryset = ToDoContent.objects.all()
	serializer_class = ToDoContentSerializer


class ToDoContentDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = ToDoContent.objects.all()
	serializer_class = ToDoContentSerializer