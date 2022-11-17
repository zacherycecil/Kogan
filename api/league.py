import requests
import os

token = os.getenv("TOKEN")

def get_league_info(summoner_id):

	# request ranked queues information
	r = requests.get("https://na1.api.riotgames.com"
		+ "/lol/league/v4/entries/by-summoner/" + summoner_id
		+ "?api_key=" + token)

	return r.json()
