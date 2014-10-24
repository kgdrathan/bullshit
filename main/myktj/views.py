from django.views.generic.base import TemplateView
from django.views.generic.edit import FormView
from django.contrib.auth import logout
from django.http.response import HttpResponse, HttpResponseRedirect, Http404
from django.contrib.auth.models import User
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, get_object_or_404

from myktj.forms import *
from myktj.models import Profile, Institute
import json

def check_logged(request):
    data = {}
    data['logged'] = False
    if request.user.is_authenticated():
        data['logged'] = True
    return HttpResponse(json.dumps(data), mimetype="application/json")

class SignupView(FormView):
    template_name = "register_login/signup.html"
    form_class = ProfileForm
    
    def get_success_url(self):
        return '/accounts/success'

    def get_context_data(self, **kwargs):
        context = super(SignupView, self).get_context_data(**kwargs)
        return context
    
    def form_valid(self, form):
        self.object = form.save()
        return HttpResponseRedirect(self.get_success_url())

class LoginView(FormView):
    template_name = "register_login/login.html"
    form_class = LoginForm
    
    def get_success_url(self):
        return '/accounts/login'

    def get_context_data(self, **kwargs):
        context = super(LoginView, self).get_context_data(**kwargs)
        return context
    
    def form_valid(self, form):
        success_url = self.get_success_url()
        return form.login(self.request, redirect_url = success_url)

def profile(request):
    user = request.user
    profile = get_object_or_404(Profile, user__pk = user.pk)
    return render(request, 'register_login/profile.html', {'profile':profile, 'user':user})

def logout_ktj(request):
    l=logout(request)
    if(l):
        return HttpResponse(True)
    else:
        return HttpResponse(False)


def institutes(request,state_val=None):
    if state_val is not 'all':
        institute=Institute.objects.filter(state__state=state_val)
    else:
        institute=Institute.objects.all()
    institutes={}
    for insti in institute:
        institutes[insti.institute]=insti.institute
        print "institutes"
    print institutes
    if len(institutes)==0:
        institutes['others']="Others"
    return HttpResponse(json.dumps(institutes),mimetype="application/json")

def success(request):
    return HttpResponse("<h1 style='color:white;'>You have successfully Registered with Kshitij IIT Kharagpur !!!</h1>"
                        "<div id='register-success-gohome' onclick='userNotLogged();'>Back</div>")

signup = SignupView.as_view()
login = LoginView.as_view()
