from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/lo_poli'

db = SQLAlchemy(app)

class Token(db.Model):
  __tablename__ = "tokens"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String)
  skin_color = db.Column(db.String, nullable=False)
  eye_color = db.Column(db.String, nullable=False)
  nose = db.Column(db.String, nullable=False)
  mouth = db.Column(db.String, nullable=False)
  hair = db.Column(db.String, nullable=False)
  facial_hair = db.Column(db.String, nullable=False)
  hair_color = db.Column(db.String, nullable=False)
  item = db.Column(db.String, nullable=False)
  token_color = db.Column(db.String, nullable=False)
  token_border = db.Column(db.String, nullable=False)

  def __repr__(self):
    return f'Token(id={self.id},\
    name={self.name},\ 
    skin_color={self.skin_color},\
    eye_color={self.eye_color},\
    nose={self.nose},\
    mouth={self.mouth},\
    hair={self.hair},\
    facial_hair={self.facial_hair},\
    hair_color={self.hair_color},\
    item={self.item},\
    token_color={self.token_color},\
    token_border={self.token_border})'

  def as_dict(self):
    return {c.name: getattr(self, c.name) for c in self.__table__.columns}