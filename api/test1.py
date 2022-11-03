import requests

def f1(name, token):

	# Make summoner name URL friendly (alien waters -> alien%20waters)
	url_name = name.replace(" ", "%20")
	print(url_name)

	# r is request to fetch puuid of summoner
	r = requests.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + url_name + "?api_key=" + token)
	puuid = r.json()['puuid']

	# default is fetch past 20 matches
	r = requests.get("https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?api_key=" + token)
	matches = r.json()

	print(matches)

	# put game info strings (Champ - Win/Loss) into a list and sent to be looped throguh in HTML
	gameList = []
	for m in matches:
		# fetch match
		r = requests.get("https://americas.api.riotgames.com/lol/match/v5/matches/" + m + "?api_key=" + token)

		players = r.json()['info']['participants']
		for player in players:
			# casefold for case insensitive comparisons
			if player['summonerName'].casefold() == name.casefold():

				# champ name
				gameInfo = player['championName'] + " - "

				# win/loss
				if(player['win']):
					gameInfo += "Victory"
				else:
					gameInfo += "Defeat"

				gameList.append(gameInfo)

	return gameList