from django.db import models
from django.db.models.fields.related import OneToOneField
from django.conf import settings

from event.models import Event

class State(models.Model):
    state = models.CharField(max_length = 100)

    def user_count(self):
        return Profile.objects.filter(state = self.id).count()

    def __unicode__(self):
        return self.state

class Department(models.Model):
    department = models.CharField(max_length = 100)
    
    def __unicode__(self):
        return self.department

class Institute(models.Model):
    state = models.ForeignKey(State)
    institute = models.CharField(max_length = 100)

    def user_count(self):
        return Profile.objects.filter(institute = self.id).count()

    def __unicode__(self):
        return self.institute

class Profile(models.Model):
    GENDER_CHOICES = (('M', 'Male'),
                      ('F', 'Female'))

    user = OneToOneField(settings.AUTH_USER_MODEL)
    dateOfBirth = models.DateField()
    gender = models.CharField(max_length = 1, choices = GENDER_CHOICES)
    department = models.ForeignKey(Department)
    year = models.IntegerField()
    institute = models.ForeignKey(Institute)
    state = models.ForeignKey(State)
    country = models.CharField(max_length = 100)
    contact = models.CharField(max_length = 20)
    address = models.TextField()
    regDate = models.DateTimeField()

    def __unicode__(self):
        return self.user.username

class event_reg(models.Model):
    user=models.ForeignKey(settings.AUTH_USER_MODEL)
    event=models.ForeignKey(Event)
    def __unicode__(self):
        return str(self.event.name+' : '+self.user.username)

class KolkataWorkshop(models.Model):
    user=models.ForeignKey(settings.AUTH_USER_MODEL)
    
    
# class Team(models.Model):
#     leader = models.ForeignKey(Profile)
#     members = models.ManyToManyField(Profile)
#     event = models.ForeignKey(Event)

#     def __unicode__(self):
#         return str(self.id) + self.event.name

# class Invitation(models.Model):
#     INVITATION_STATUS = (('1', 'Pending')
#                          ('2', 'Accepted'),
#                          ('3', 'Ignored'))

#     team = models.ForeignKey(Team)
#     status = models.IntegerField(choices = INVITATION_STATUS)
