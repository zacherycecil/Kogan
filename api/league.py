import requests
import os

token = os.getenv("TOKEN")

def get_league_info(summoner_id):

	# r is request to fetch puuid of summoner
	print("https://na1.api.riotgames.com"
		+ "/lol/league/v4/entries/by-summoner/" + summoner_id
		+ "?api_key=" + token)
	r = requests.get("https://na1.api.riotgames.com"
		+ "/lol/league/v4/entries/by-summoner/" + summoner_id
		+ "?api_key=" + token)

	return r.json()
