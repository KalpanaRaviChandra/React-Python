from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

@csrf_exempt
@require_http_methods(["POST"])
def register_user(request):
    return JsonResponse({'status': 'User registered'})

@csrf_exempt
@require_http_methods(["GET"])
def get_user_profile(request):
    return JsonResponse({'profile': 'User profile details'})
