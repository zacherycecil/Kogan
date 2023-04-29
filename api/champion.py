import requests
import os
import pandas as pd

token = os.getenv("TOKEN")

def get_champion_info():

	# request champion information from current version
	r = requests.get("https://ddragon.leagueoflegends.com/api/versions.json")
	currentVersion = r.json()[0]
	r_json = requests.get("http://ddragon.leagueoflegends.com/cdn/" + currentVersion + "/data/en_US/champion.json").json()

	infoList = []
	champ_list = list(r_json['data'])
	for champ in champ_list:
		infoList.append(r_json['data'][champ])
	return infoList
