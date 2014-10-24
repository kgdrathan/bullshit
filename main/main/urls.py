from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

admin.autodiscover()

urlpatterns = patterns('',
    # ('^sitemap.xml$', TemplateView.as_view(template_name = "sitemap.xml")),
    url(r'^', include('index.urls')),
    url(r'^accounts/', include('myktj.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^eventreg/',include('event.urls')),
    url(r'^kronicle/',include('blog.urls')),
    # url(r'^accounts/', include('myktj.urls')),
    # url(r'^api/', include('api.urls')),
)
urlpatterns += staticfiles_urlpatterns()
