from django.contrib import admin
from myktj.models import *

class StateAdmin(admin.ModelAdmin):
    list_display = ('state', 'user_count')

class InstituteAdmin(admin.ModelAdmin):
    list_display = ('institute', 'user_count')

admin.site.register(Profile)
admin.site.register(State, StateAdmin)
admin.site.register(Institute, InstituteAdmin)
admin.site.register(Department)
