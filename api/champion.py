import requests
import os

token = os.getenv("TOKEN")

def get_champion_info(champion_id):

	# request champion information from current version
	r = requests.get("https://ddragon.leagueoflegends.com/api/versions.json")
	currentVersion = r.json()[0]
	r = requests.get("http://ddragon.leagueoflegends.com/cdn/" + currentVersion + "/data/en_US/champion.json")

	for champ in r.json()['data']:

		print(champion_id +  " " + r.json()['data'][champ]['key'])
		if(r.json()['data'][champ]['key'] == champion_id):
			print(r.json()['data'][champ]['key'])
			return r.json()['data'][champ].json()

	return {}

