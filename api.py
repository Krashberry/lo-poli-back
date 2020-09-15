from models import app, Token
from flask import jsonify, request, send_file
from crud.token_crud import get_all_tokens, get_token

@app.route('/')
def home():
  first_token = []
  return jsonify(token = first_token.as_dict() if first_token else 'No tokens!')

@app.route('/tokens')
def token_index_create():
  return get_all_tokens()

@app.route('/tokens/<int:id>')
def token_get_show_update_delete(id):
  return get_token()

@app.errorhandler(Exception)
def unhandled_exception(e):
  app.logger.error('Unhandled Exception: %s', (e))
  message_str = e.__str__()
  return jsonify(message=message_str.split(':')[0])