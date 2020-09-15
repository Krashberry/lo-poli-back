from flask import jsonify, redirect
from models import db, Token

def get_all_tokens():
    all_tokens = Token.query.all()
    results = [token.as_dict() for token in all_tokens] 
    return jsonify(results)

def get_token(id):
    token = Token.query.get(id)
    if token:
      return jsonify(token.as_dict())
    else:
      raise Exception('Error getting token at {}'.format(id))