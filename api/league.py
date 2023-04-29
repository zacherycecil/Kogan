import requests
import os

token = os.getenv("TOKEN")
tft_token = os.getenv("TFT_TOKEN")

def get_league_info(summoner_id):

	r = requests.get("https://na1.api.riotgames.com"
		+ "/lol/league/v4/entries/by-summoner/" + summoner_id
		+ "?api_key=" + token).json()

	return r

def get_tft_league_info(summoner_id):

	r = requests.get("https://na1.api.riotgames.com"
		+ "/tft/league/v1/entries/by-summoner/" + summoner_id
		+ "?api_key=" + tft_token).json()

	return r
