from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from core.views.products import ProductViewSet
from core.views.users import UserViewSet, UserRegistrationView, UserProfileView
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('admin/', admin.site.urls), # For admin access
    path('api/', include(router.urls)), # Auto-handles the user and product routes
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/register/', UserRegistrationView.as_view(), name='user-register'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/user/profile/', UserProfileView.as_view(), name='user-profile'),  
    # Add your routes here

    
]



# For image
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
