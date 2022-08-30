import requests


token = "RGAPI-54047b3b-869b-43a6-86a4-be24ebee61ed"

r = requests.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/afrozone?api_key=" + token)

print("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/afrozone?api_key="  + token)
print(r)
print(r.headers)
print(r.text)
print(r.json())



r = requests.get("https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/LNfX0XWN6rZoGxtlTI9t2-kPizmUsRzyVWGbCcJHwHzgXYZ2sz7nXO8IoXiHtgnlcx2TPTQApaeSTw/ids?api_key=" + token)
print(r)
print(r.headers)
print(r.json()[0])
matches = r.json()
match1 = r.json()[0]

r = requests.get("https://americas.api.riotgames.com/lol/match/v5/matches/" + match1 + "?api_key=" + token)

players = r.json()['info']['participants']

for player in players:
	print(player['championName'] + " damage: " + str(player['totalDamageDealtToChampions']))

for m in matches:
	r = requests.get("https://americas.api.riotgames.com/lol/match/v5/matches/" + m + "?api_key=" + token)
	players = r.json()['info']['participants']

	for player in players:
		if player['summonerName'] == "afrozone":
			print(player['win'])