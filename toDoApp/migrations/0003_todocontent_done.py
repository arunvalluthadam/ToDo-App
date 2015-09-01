# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('toDoApp', '0002_remove_todocontent_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='todocontent',
            name='done',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
    ]
