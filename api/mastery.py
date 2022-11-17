import requests
import os

token = os.getenv("TOKEN")

def get_mastery_info(summoner_id):

	# request mastery information
	r = requests.get("https://na1.api.riotgames.com"
		+ "/lol/champion-mastery/v4/champion-masteries/by-summoner/" + summoner_id
		+ "/top?count=10" + "&api_key=" + token)

	print("https://na1.api.riotgames.com"
		+ "/lol/champion-mastery/v4/champion-masteries/by-summoner/" + summoner_id
		+ "/top?count=10" + "&api_key=" + token)

	return r.json()
