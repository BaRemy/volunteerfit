from flask import Blueprint, request, jsonify
from . import db
from .models import Volunteer, Organization, Opportunity

bp = Blueprint('main', __name__)

@bp.route('/volunteers', methods=['POST'])
def create_volunteer():
    data = request.get_json()
    new_volunteer = Volunteer(name=data['name'], email=data['email'])
    db.session.add(new_volunteer)
    db.session.commit()
    return jsonify({'message': 'Volunteer created'}), 201

@bp.route('/organizations', methods=['POST'])
def create_organization():
    data = request.get_json()
    new_organization = Organization(name=data['name'], description=data['description'])
    db.session.add(new_organization)
    db.session.commit()
    return jsonify({'message': 'Organization created'}), 201

@bp.route('/opportunities', methods=['POST'])
def create_opportunity():
    data = request.get_json()
    new_opportunity = Opportunity(title=data['title'], description=data['description'], organization_id=data['organization_id'])
    db.session.add(new_opportunity)
    db.session.commit()
    return jsonify({'message': 'Opportunity created'}), 201

@bp.route('/opportunities/<int:opportunity_id>/volunteers/<int:volunteer_id>', methods=['POST'])
def add_volunteer_to_opportunity(opportunity_id, volunteer_id):
    opportunity = Opportunity.query.get_or_404(opportunity_id)
    volunteer = Volunteer.query.get_or_404(volunteer_id)
    opportunity.volunteers.append(volunteer)
    db.session.commit()
    return jsonify({'message': 'Volunteer added to opportunity'}), 200

def init_app(app):
    app.register_blueprint(bp)