from django.urls import path, include
from rest_framework.routers import DefaultRouter
from movies.views import MovieView

router = DefaultRouter()
router.register('movies', MovieView)

urlpatterns = [
    path('', include(router.urls)),
]