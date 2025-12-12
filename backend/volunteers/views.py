from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import EmailMessage
from .models import Volunteer
from .serializers import VolunteerSerializer
from .tokens import account_activation_token

class VolunteerRegistrationView(APIView):
    def post(self, request):
        serializer = VolunteerSerializer(data=request.data)
        if serializer.is_valid():
            volunteer = serializer.save(is_active=False)  
            volunteer.set_password(request.data["password"])
            volunteer.save()# inactive until verified

            # Generate activation link
            uid = urlsafe_base64_encode(force_bytes(volunteer.pk))
            token = account_activation_token.make_token(volunteer)
            activation_link = f"http://localhost:3000/verify/{uid}/{token}"

            message = f"""
Hello {volunteer.full_name},

Please click the link below to verify your account:

{activation_link}

If you did not request this, ignore this email.
            """
            try:
                email = EmailMessage("Verify your account", message, to=[volunteer.email])
                email.send()
            except Exception as e:
                return Response(
                    {"error": f"Volunteer created but email not sent. Error: {str(e)}"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

            return Response(
                {"message": "Volunteer registered successfully. Check your email for activation link."},
                status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Activation view
from rest_framework.decorators import api_view

@api_view(["GET"])
def activate_volunteer(request, uidb64, token):
    print("UIDB64:", uidb64)
    print("Token:", token)
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        volunteer = Volunteer.objects.get(pk=uid)
        print("Volunteer found:", volunteer.email)
    except Exception as e:
        print("Activation error:", e)
        volunteer = None

    if volunteer is not None and account_activation_token.check_token(volunteer, token):
        volunteer.is_active = True
        volunteer.save()
        return Response({"message": "Account activated!"})
    
    return Response({"error": "Invalid or expired link"}, status=400)




from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Volunteer

class VolunteerLoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        # 1. Validate input
        if not email or not password:
            return Response({"error": "Email and password are required."},
                            status=status.HTTP_400_BAD_REQUEST)

        # 2. Find volunteer by email
        volunteer = Volunteer.objects.filter(email=email).first()
        if not volunteer:
            return Response({"error": "Invalid credentials."},
                            status=status.HTTP_400_BAD_REQUEST)

        # 3. Check if account is active
        if not volunteer.is_active:
            return Response({"error": "Account not activated. Check your email."},
                            status=status.HTTP_403_FORBIDDEN)

        # 4. Check password
        if not volunteer.check_password(password):
            return Response({"error": "Invalid credentials."},
                            status=status.HTTP_400_BAD_REQUEST)

        # 5. Success
        return Response({"message": "Login successful."}, status=status.HTTP_200_OK)
