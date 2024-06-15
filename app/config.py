import os

class Config:
    SECRET_KEY = os.urandom(24)
    SQLALCHEMY_DATABASE_URI = 'sqlite:////home/lion/k/volunteerfit/instance/volunteerfit.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False