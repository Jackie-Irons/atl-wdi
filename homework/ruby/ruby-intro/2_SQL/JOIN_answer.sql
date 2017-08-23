SELECT matchid, player FROM goal WHERE teamId = 'GER'

SELECT player,teamid, stadium, mdate
  FROM game JOIN goal ON (id=matchid) WHERE teamid = 'GER'


SELECT team1, team2, player
  FROM game JOIN goal ON (id=matchid) WHERE player LIKE 'Mario%'


SELECT player, teamid, coach, gtime
 FROM goal JOIN eteam ON teamid=id
 WHERE gtime<=10

 SELECT mdate, teamname FROM game JOIN eteam ON (team1=eteam.id) 
 WHERE coach='Fernando Santos'

 SELECT player FROM goal JOIN game ON id=matchid AND stadium='National Stadium, Warsaw'

SELECT DISTINCT(player)
  FROM game
  JOIN goal ON matchid = id
  WHERE ((team1='GER' OR team2='GER') AND NOT teamid='GER')

SELECT teamname, COUNT(*)
 FROM eteam JOIN goal ON id=teamid
 GROUP BY teamname 


SELECT stadium, COUNT(*)
 FROM game JOIN goal ON id=matchid
 GROUP BY stadium 

