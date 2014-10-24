from django.conf.urls import patterns, url

urlpatterns = patterns('',
    # url(r'^hello$', 'index.views.hello', name = 'hello'),
    url(r'^$','index.views.index',name='index'),
    url(r'^events$','index.views.index',name='events'),
    url(r'^events/(?P<event>\w+)$','index.views.index',name='events'),
    url(r'^sponsors$','index.views.index',name='sponsors'),
    # url(r'^sponsors_display$','index.views.sponsors_display',name='sponsors_display'),
    url(r'^exhibitions$','index.views.index',name='exhibitions'),
    url(r'^workshops$','index.views.index',name='workshops'),
    url(r'^megashows$','index.views.index',name='megashows'),
    url(r'^guests$','index.views.index',name='guests'),
    url(r'^contacts$','index.views.index',name='contacts'),
    url(r'^lineapp$','index.views.lineapp',name='lineapp'),
)
