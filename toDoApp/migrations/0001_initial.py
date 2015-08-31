# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ToDoContent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200)),
                ('slug', models.SlugField(unique=True, null=True, blank=True)),
                ('content', models.TextField(null=True, blank=True)),
                ('date', models.DateField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'To Do Content',
                'verbose_name_plural': 'To Do Contents',
            },
            bases=(models.Model,),
        ),
    ]
