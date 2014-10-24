from django.conf.urls import patterns, url

urlpatterns = patterns('',
    # url(r'^hello$', 'index.views.hello', name = 'hello'),
    url(r'^register$','event.views.register',name='event_register'),
    url(r'^register_w$','event.views.register_w', name='kal_workshop_register'),
)
