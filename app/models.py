from . import db

class Volunteer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    opportunities = db.relationship('Opportunity', secondary='volunteer_opportunity', back_populates='volunteers')

class Organization(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    opportunities = db.relationship('Opportunity', backref='organization', lazy=True)

class Opportunity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    organization_id = db.Column(db.Integer, db.ForeignKey('organization.id'), nullable=False)
    volunteers = db.relationship('Volunteer', secondary='volunteer_opportunity', back_populates='opportunities')

volunteer_opportunity = db.Table('volunteer_opportunity',
    db.Column('volunteer_id', db.Integer, db.ForeignKey('volunteer.id'), primary_key=True),
    db.Column('opportunity_id', db.Integer, db.ForeignKey('opportunity.id'), primary_key=True)
)