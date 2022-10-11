from django.contrib import admin
from django.urls import path
from main.views import index, blog, blogdetail, templatetag

urlpatterns = [
    path('', index),
    path('blog/', blog),
    path('blog/<int:pk>', blogdetail),
    path('templatetag/', templatetag),
    path('admin/', admin.site.urls),
]
