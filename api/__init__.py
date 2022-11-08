from flask import Flask
from flask import render_template
from api.test1 import f1
import os
import json

def create_app():
    app = Flask(__name__)
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    
    @app.route('/summoner/<name>')
    def summoner_page(name):
        return render_template('main.html', gameList = f1(name, os.getenv("TOKEN")))

    @app.route('/login')
    def login():
        return render_template('login.html')

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/api/summoner/<name>')
    def summoner_games(name):
        return json.dumps(f1(name, os.getenv("TOKEN")))
        
        
        

#    @app.route('/profile/<name>')
#    def profile_analysis(name):
#        return render_template('profile.html', gameList = profanalysis(name))

    return app
