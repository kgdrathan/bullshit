from django.conf.urls import patterns, url
from myktj import views
from django.views.decorators.csrf import csrf_exempt


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'ktj14.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^login$', csrf_exempt(views.login) , name="account_login"),
    url(r'^success$', csrf_exempt(views.success) , name="account_success"),
    url(r'^institutes/$', csrf_exempt(views.institutes) , name="institutes"),
    url(ur'^institutes/(?P<state_val>.*)$', csrf_exempt(views.institutes) , name="institutes_state"),
    url(r'^profile$', csrf_exempt(views.profile) , name="profile"),
    url(r'^logout$', csrf_exempt(views.logout_ktj) , name="account_logout"),
    url(r'^signup$', csrf_exempt(views.signup) , name="account_signup"),
    # url(r'^facebook_signup$', csrf_exempt(views.facebook_signup) , name="facebook_signup"),
    # url(r'^google_signup$', csrf_exempt(views.google_signup) , name="google_signup"),
    # url(r'^register$', csrf_exempt(views.signup_solo) , name="account_signup_solo"),
    # url(r'^facebook_signup_ktj$', csrf_exempt(views.facebook_signup_solo) , name="facebook_signup_solo"),
    # url(r'^google_signup_ktj$', csrf_exempt(views.google_signup_solo) , name="google_signup_solo"),
    # url(r'^social_login$', csrf_exempt(views.social_login) , name="social_login"),
    url(r'^check_logged$', csrf_exempt(views.check_logged) , name="check_logged"),
    # url(r'^details$', csrf_exempt(views.details) , name="details"),
    # url(r'^profile_exists$', csrf_exempt(views.profile_exists) , name="profile_exists"),
)
