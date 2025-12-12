from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from .models import VolunteerToken

class VolunteerTokenAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.headers.get("Authorization")

        if not token:
            return None   # no token provided

        try:
            token_obj = VolunteerToken.objects.get(key=token)
        except VolunteerToken.DoesNotExist:
            raise AuthenticationFailed("Invalid token")

        return (token_obj.volunteer, None)
