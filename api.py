from flask import jsonify, render_template, request
from models import app, Token
from crud.token_crud import get_all_tokens, get_token, create_token, update_token, destroy_token

@app.route('/', methods=['GET'])
def home():
  if request.method == 'GET':
    return get_all_tokens()

@app.route('/tokens', methods=['GET', 'POST'])
def token_create():
  if request.method == 'GET':
    return render_template("token_creation.html", image="")
  if request.method == 'POST':
    return create_token(**request.form)
  
@app.route('/tokens/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def token_show_update_delete(id):
  if request.method == 'GET':
    return get_token(id)
  if request.method == 'PUT':
    return update_token(id, **request.form)
  if request.method == 'DELETE':
    return destroy_token(id)

@app.errorhandler(Exception)
def unhandled_exception(e):
  app.logger.error('Unhandled Exception: %s', (e))
  message_str = e.__str__()
  return jsonify(message=message_str.split(':')[0])
