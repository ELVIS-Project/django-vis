import os
from django.db import models
from django.conf import settings

def upload_path(instance, filename):
    return os.path.join("user_%s" % instance.user_id, filename)

class Piece(models.Model):
    user_id = models.CharField(max_length=20)
    file = models.FileField(upload_to=upload_path)

class ResultLocation(models.Model):
    user_id = models.CharField(max_length=20)
    result_type = models.CharField(max_length=5)  # either 'table' or 'graph'
    pathname = models.CharField(max_length=100)
