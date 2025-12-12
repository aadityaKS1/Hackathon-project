from django.urls import path
from .views import VolunteerRegistrationView, activate_volunteer, VolunteerLoginView

urlpatterns = [
    path("register/", VolunteerRegistrationView.as_view(), name="volunteer-register"),
    path("activate/<uidb64>/<token>/", activate_volunteer, name="volunteer-activate"),
    path("login/", VolunteerLoginView.as_view(), name="volunteer-login"),
]
