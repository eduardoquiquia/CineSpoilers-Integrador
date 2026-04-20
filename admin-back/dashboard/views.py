from django.http import JsonResponse
from .services import get_dashboard_data

def dashboard(request):
    return JsonResponse(get_dashboard_data())