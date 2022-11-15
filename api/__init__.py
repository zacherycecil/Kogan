from flask import Flask
from flask import render_template
from api.summoner import *
from api.league import *

def create_app():

    app = Flask(__name__)
    app.config['TEMPLATES_AUTO_RELOAD'] = True

    @app.route('/api/summoner/<name>')
    def summoner(name):
        return get_summoner_info(name)
        
    @app.route('/api/league/<summoner_id>')
    def league(summoner_id):
        return get_league_info(summoner_id)

    return app
