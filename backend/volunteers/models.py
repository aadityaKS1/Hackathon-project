from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class Volunteer(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    password = models.CharField(max_length=128)  # will store hashed password
    age = models.IntegerField()
    skills = models.JSONField(default=list)
    role = models.CharField(max_length=20, default="volunteer")  # fixed
    is_active = models.BooleanField(default=False)  # for email verification

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.full_name



import secrets

class VolunteerToken(models.Model):
    volunteer = models.OneToOneField("Volunteer", on_delete=models.CASCADE)
    key = models.CharField(max_length=40, unique=True)

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = secrets.token_hex(20)  # generates a 40-char token
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Token for {self.volunteer.email}"
