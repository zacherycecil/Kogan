from flask import Flask
from flask import render_template
from api.summoner import *
from api.league import *
from api.mastery import *
from api.champion import *

def create_app():

    app = Flask(__name__)
    app.config['TEMPLATES_AUTO_RELOAD'] = True

    @app.route('/api/summoner/<nameURL>')
    def summoner(nameURL):
        return get_summoner_info(nameURL)

    @app.route('/api/league/<summoner_id>')
    def league(summoner_id):
        return get_league_info(summoner_id)

    @app.route('/api/tftleague/<summoner_id>')
    def tft_league(summoner_id):
        return get_tft_league_info(summoner_id)
    
    @app.route('/api/mastery/<summoner_id>')
    def mastery(summoner_id):
        return get_mastery_info(summoner_id)

    @app.route('/api/champion')
    def champion():
        return get_champion_info()

    return app
