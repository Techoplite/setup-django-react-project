from rest_framework import routers
from .views import TestModelViewset

router = routers.DefaultRouter()
router.register('api/testmodels', TestModelViewset, 'test-models')

urlpatterns = router.urls
