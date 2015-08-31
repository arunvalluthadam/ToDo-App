from django.conf.urls import patterns, include, url
from rest_framework.urlpatterns import format_suffix_patterns
from toDoApp import views

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'toDoApp.views.home', name='home'),
    url(r'^api/$', views.ToDoContentList.as_view()),
    url(r'^api/(?P<pk>[0-9]+)/$', views.ToDoContentDetail.as_view()),
)

# urlpatterns = format_suffix_patterns(patterns)