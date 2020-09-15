# Notes

## Initial Setup
1) Set up virtual environment 
  > python3 -m venv <venv_name>

2) Add .gitignore file
  > touch .gitignore

3) Initialize git repository
  > git init

4) Activate our venv
  > . <venv_name>/bin/activate

5) Upgrade Pip [inside the venv]
  > pip3 install --upgrade pip3

6) Take care of installs:
  * Flask
    > pip3 install flask
  * Flask-SQLAlchemy
    > pip3 install Flask-SQLAlchemy
  * Psycopg2
    > pip3 install psycopg2

7) Copy installs into requirments.txt
  > pip3 freeze > requirements.txt

8) Create models.py for the models
  > touch models.py

9) Create api.py for the flask server
  > touch api.py

## Models
1) Decide if you need to make a seperate folder/files for the models and then import them in, if you don't then you can do the imports for Flask and SQLAlchemy here
  > from flask import Flask
  > from flask_sqlalchemy import SQLAlchemy

2) Next you're gonna create your Flask app, tell it to print any queries it is issueing, the database URI to set it to, and the SQLAlchemy needs to be given that newly created and configured app
  > app = Flask(__name__)
  > app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
  > app.config['SQLALCHEMY_ECHO'] = True
  > app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/<database_name>'
  > db = SQLAlchemy(app)

3) Next you need to setup the Model itself
  > <model_code_goes_here>
  **NOTE(s): 
  - Don't forget to add the .as_dict() method to the model!
  - Don't forget to add:
    > return {c.<attribute_name>: getattr(self, c.<attribute_name>) for c in self.__table__.columns}
    inline to itterate over all the columns of the table

## Database Creation
1) Create the database in psql
  > psql

  > kiraahg=# CREATE DATABASE <database_name>

2) Create tables for that databse in ipython from inside your venv
  >>> from models import db
  >>> db.create_all()

3) Seed some content for the databse
  >>> from models import <Model_name>
  >>> <things> = [<Model_name>(stuff=''...)]
  >>> <things>.append(<Model_name>(stuff=''...))
  >>> db.session.add_all(<things>)

4) Commit the content that was seeded to the database
  > db.session.commit()

## Flask 
1) Import the flask app and jsonify into your api.py
  >>> from flask import jsonify, request, send_file
  >>> from models import app, <Model_name>
  **NOTE(s): 
  - Don't forget to import 
    > from crud.<model_name>_crud import get_all_<model_name>s, get_<model_name>

2) Add test route to make sure it's working correctly
  > @app.route('/')
  > def home():
  >  return jsonify(message='It works!')

3) Export the env and the app
  > export FLASK_ENV=development
  > export FLASK_APP=api.py
   
4) Run the app to test it
  > flask run

5) Test the SQLAlchemy connection 
  > @app.route('/')
  > def home():
  >   first_<model_name> = <Model_name>.query.first()
  >   print(f'✅ {first_<model_name>}')
  >   return jsonify(<model_name>=first_<model_name>)
  THEN
  > @app.route('/')
  > def home():
  >   first_<model_name> = []
  >   return jsonify(<model_name>=first_<model_name>.as_dict() if first_<model_name> else 'No <model_name>s!')

6) Finish Making your routes in your api.py

## Modularize Your Code
1) Create crud folder
  > touch crud/<model_name>.py

2) Add your imports to the top of your <model_name>_crud.py
  > from flask import jsonify, redirect
  > from models import db, <Model_name>

3) Define your route's functions
  > INDUCE
  > INDEX, CREATE, SHOW, UPDATE, DELETE

4) Import your functions into Flask
  > from crud.<model_name>_crud import get_all_<model_name>s, get_<model_name>

5) Add error handling (Exception) function for any time an exception is raised in your api.py
  > @app.errorhandler(Exception)
  >   def unhandled_exception(e):
  >     app.logger.error('Unhandled Exception: %s', (e))
  >     message_str = e.__str__()
  >     return jsonify(message=message_str.split(':')[0])

6) For our create_<model_name> function we need to pass it kwargs
  > def create_<model_name>(**form_kwargs):
  >   new_<model_name> = <model_name>(**form_kwargs)
  >   db.session.add(new_<model_name>)
  >   db.session.commit()
  >   return jsonify(new_<model_name>.as_dict())
  >
  > Over in the route:
  > @app.route('/<model_name>', methods=['POST'])
  > def add_<model_name>():
  >   return create_<model_name>(**request.form)

7) for our update_<model_name> function we need to pass it kwargs
  > def update_<model_name>(id, **update_values):
  >   <model_name> = <model_name>.query.get(id)
  >   if <model_name>:
  >     for key, value in update_values.items():
  >       setattr(<model_name>, key, value)
  >     db.session.commit()
  >     return jsonify(<model_name>.as_dict())
  >   else:
  >     raise Exception('No <model_name> at id {}'.format(id))
  >
  > Over in the route:
  > ...
  > from crud.<model_name>_crud import get_all_<model_name>s, get_<model_name>, create_<model_name>, update_<model_name>
  > 
  > ...
  > 
  > @app.route('/<model_name>s/<int:id>', methods=['GET', 'PUT'])
  > def <model_name>_show_update_delete(id):
  >   if request.method == 'GET':
  >     return get_<model_name>(id)
  >   if request.method == 'PUT':
  >     return update_<model_name>(id, **request.form)

8) for our delete_<model_name> function we need to
  > def destroy_<model_name>(id):
  >   <model_name> = <Model_name>.query.get(id)
  >   if <model_name>:
  >     db.session.delete(<model_name>)
  >     db.session.commit()
  >     return redirect('/<model_name>s')
  >   else:
  >     raise Exception('No <Model_name> at id {}'.format(id))
  >
  > Over in the route:
  > Import the function from crud.<model_name>_crud
  > Add 'DELETE' to the list of accepted actions on the relevant route
  > Add conditional in the route function that checks for request method 'DELETE'
  > return the results of destroy_<model_name>(id) 

tokens = Token(
  skin_color = "#f7b9ff",
  eye_color = "#fffefe",
  nose = "slim",
  mouth = "wide",
  hair = "bowl",
  facial_hair = "none",
  hair_color = "#fffefe",
  item = "none",
  token_color = "#8ece9c",
  token_border = "#ffa500",
  )