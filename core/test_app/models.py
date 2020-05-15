from django.db import models


class TestModel(models.Model):
    test_attribute = models.CharField(max_length=50)
