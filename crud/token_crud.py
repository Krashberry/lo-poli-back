from flask import Flask, jsonify, render_template, redirect
from models import db, Token

def get_all_tokens():
    all_tokens = Token.query.all()
    results = [token.as_dict() for token in all_tokens] 
    return render_template("tokens_list.html", results=results)

def get_token(id):
    token = Token.query.get(id)
    if token:
      result = token.as_dict()
      return render_template("token_detail.html", result=result)
    else:
      raise Exception('Error getting token at {}'.format(id))

def create_token(**form_kwargs):
  new_token = Token(**form_kwargs)
  db.session.add(new_token)
  db.session.commit()
  return redirect(f'/tokens/{new_token.id}')

def update_token(id, **update_values):
  token = Token.query.get(id)
  if token:
    for key, value in update_values.items():
      setattr(token, key, value)
    db.session.commit()
    return jsonify(token.as_dict())
  else:
    raise Exception('No Token at id {}'.format(id))

def destroy_token(id):
  token = Token.query.get(id)
  if token:
    db.session.delete(token)
    db.session.commit()
    return redirect('/tokens')
  else:
    raise Exception('No Token at id {}'.format(id))