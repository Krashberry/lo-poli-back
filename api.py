from models import app, Token
from flask import jsonify, request, send_file

@app.route('/')
def home():
  return jsonify(message='It works!')