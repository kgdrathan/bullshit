from django.conf.urls import patterns, url
from myktj import views
from django.views.decorators.csrf import csrf_exempt


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'ktj14.views.home', name='home'),
    url(r'^$', 'blog.views.thengakola')
)
