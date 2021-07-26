from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from autoslug import AutoSlugField

# Create your models here.
gender_choice = (
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Others', 'Others')
)


class UserProfile(models.Model):
    user = models.OneToOneField(
        User, primary_key=True, unique=True, on_delete=models.CASCADE)
    user_slug = AutoSlugField(populate_from='user', unique=True, null=True)
    profile_picture = models.ImageField(
        upload_to='user_profiles', default='user_profiles/default.png', blank=True)

    gender = models.CharField(max_length=20, choices=gender_choice, blank=True)
    date_of_birth = models.DateField(blank=True, null=True)
    phone = models.CharField(max_length=13, blank=True, null=True)
    address = models.TextField(max_length=200, blank=True, null=True)
    bio = models.TextField(max_length=128, blank=True, null=True)

    usn = models.CharField(max_length=20, blank=True, null=True)
    course = models.CharField(max_length=100, blank=True, null=True)
    college = models.CharField(max_length=200, blank=True, null=True)

    github_profile = models.URLField(max_length=200, blank=True, null=True)
    linkedin_profile = models.URLField(max_length=200, blank=True, null=True)
    facebook_profile = models.URLField(max_length=200, blank=True, null=True)
    instagram_profile = models.URLField(max_length=200, blank=True, null=True)
    twitter_profile = models.URLField(max_length=200, blank=True, null=True)

    codeforces_handle = models.CharField(max_length=20, blank=True, null=True)
    codechef_handle = models.CharField(max_length=20, blank=True, null=True)
    leetcode_handle = models.CharField(max_length=20, blank=True, null=True)
    hackerrank_handle = models.CharField(max_length=20, blank=True, null=True)

    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    followers = models.ManyToManyField(
        User, blank=True, related_name='followers')

    def __str__(self):
        return f"{self.user.username}'s profile"


# to create user profile automaticatically after user creation
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

# to update the user profile data


@receiver(post_save, sender=User)
def update_user_profile(sender, instance, **kwargs):
    instance.userprofile.save()


class ContactForm(models.Model):
    fullName = models.CharField(max_length=30)
    emailAddress = models.EmailField(max_length=254)
    message = models.TextField()
    contactedTime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fullName


class Syllabus(models.Model):

    branchChoice = (
        ('Civil', 'Civil'),
        ('Mechanical', 'Mechanical'),
        ('Electricals', 'Electricals'),
        ('Computer Science', 'Computer Science')
    )
    branchName = models.CharField(
        choices=branchChoice, max_length=50, primary_key=True, unique=True)
    scheme = models.CharField(max_length=4, default=2018)
    branchImage = models.ImageField(
        upload_to='branch/', default='branch/system.png')

    def __str__(self):
        return self.branchName

# -----------model for signup forms -------------------


class Accounts(models.Model):
    # validation during store value to db
    validate_userEmail = RegexValidator(
        r'^[A-Z,a-z,0-9,?./""-]+@(gmail|outlook|yahoo|icloud|gov|nic)+[.]+(com|org|net|gov|mil|biz|info|mobi|in|name|aero|jobs|museum|co)+$', "Enter valid emil", "Email should be valid and top level domain")
    validate_password = RegexValidator(
        r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{6,20}$", "Password should reach required pattern", "")

    branchChoice = (
        ('Civil', 'Civil'),
        ('Mechanical', 'Mechanical'),
        ('Electricals', 'Electricals'),
        ('Computer Science', 'Computer Science')
    )
    userEmail = models.CharField(
        max_length=100,   validators=[validate_userEmail], unique=True,)
    password = models.CharField(
        max_length=500,  validators=[validate_password])
    uniqueId = models.CharField(max_length=100,  unique=True)
    userHandle = models.CharField(max_length=50, unique=True)
    token = models.CharField(max_length=500)
    userHandle = models.CharField(max_length=50, default="null")
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    gender = models.CharField(max_length=20)
    profileImg = models.CharField(max_length=500)
    proffesion = models.CharField(max_length=100)
    Branch = models.CharField(max_length=50, choices=branchChoice)
    currentSem = models.CharField(max_length=50)
    isActivated = models.BooleanField(default=False)

    def __str__(self):
        return self.userEmail


# Resourse section
class Course(models.Model):
    courseName = models.CharField(
        max_length=100, primary_key=True, unique=True)

    def __str__(self):
        return self.courseName


class YearOrSem(models.Model):
    yearOrSemName = models.CharField(
        max_length=50, primary_key=True, unique=True)

    def __str__(self):
        return self.yearOrSemName


class Notes(models.Model):
    subjectName = models.CharField(max_length=100)
    subjectCode = models.CharField(max_length=100, blank=True, null=True)
    yearOrSem = models.ForeignKey(YearOrSem, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    documentURL = models.URLField(max_length=512, null=True)

    def __str__(self):
        return self.subjectName


class QuestionPapers(models.Model):
    subjectName = models.CharField(max_length=100)
    subjectCode = models.CharField(max_length=100, blank=True, null=True)
    yearOrSem = models.ForeignKey(YearOrSem, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    documentURL = models.URLField(max_length=512, null=True)

    def __str__(self):
        return self.subjectName
