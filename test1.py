import requests


token = "RGAPI-0c033be1-f5f7-42f4-b475-4d78c203ac81"
summoner_name = "cowboy%20waters"



def f1(name):

	# Make summoner name URL friendly (alien waters -> alien%20waters)
	url_name = name.replace(" ", "%20")

	# r is request to fetch puuid of summoner
	r = requests.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + url_name + "?api_key=" + token)
	puuid = r.json()['puuid']

	# default is fetch past 20 matches
	r = requests.get("https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?api_key=" + token)
	matches = r.json()

	# put result into string
	gameList = []
	for m in matches:
		# fetch match
		r = requests.get("https://americas.api.riotgames.com/lol/match/v5/matches/" + m + "?api_key=" + token)

		players = r.json()['info']['participants']
		for player in players:
			if player['summonerName'] == name:

				# champ name
				gameInfo = player['championName'] + " - "

				# win/loss
				if(player['win']):
					gameInfo += "Victory"
				else:
					gameInfo += "Defeat"

				gameList.append(gameInfo)

	return gameList