carmen=# SELECT name FROM country WHERE region = 'Southern Europe' ORDER BY population ASC LIMIT 1;
             name
-------------------------------
 Holy See (Vatican City State)
(1 row)


carmen=# SELECT language FROM countrylanguage WHERE countrycode = 'VAT';
 language
----------
 Italian
(1 row)

carmen=# SELECT * FROM countrylanguage WHERE language = 'Italian' ORDER BY percentage DESC;
 countrycode | language | isofficial | percentage
-------------+----------+------------+------------
 SMR         | Italian  | t          |        100
 ITA         | Italian  | t          |       94.1
 MCO         | Italian  | f          |       16.1
 CHE         | Italian  | t          |        7.7
 LUX         | Italian  | f          |        4.6
 LIE         | Italian  | f          |        2.5
 BEL         | Italian  | f          |        2.4
 AUS         | Italian  | f          |        2.2
 CAN         | Italian  | f          |        1.7
 ARG         | Italian  | f          |        1.7
 DEU         | Italian  | f          |        0.7
 USA         | Italian  | f          |        0.6
 FRA         | Italian  | f          |        0.4
 BRA         | Italian  | f          |        0.4
 VAT         | Italian  | t          |          0
(15 rows)

carmen=# SELECT name FROM country WHERE code = 'SMR';
    name
------------
 San Marino
(1 row)

carmen=# SELECT name FROM city WHERE countrycode = 'SMR';
    name
------------
 Serravalle
 San Marino
(2 rows)


carmen=# SELECT * FROM city WHERE name LIKE 'Serr%';
  id  |    name    | countrycode |     district      | population
------+------------+-------------+-------------------+------------
  265 | Serra      | BRA         | Espï¿½rito Santo  |     302666
 3170 | Serravalle | SMR         | Serravalle/Dogano |       4802
(2 rows)

carmen=# SELECT name FROM country WHERE code = 'BRA';
  name
--------
 Brazil
(1 row)

carmen=# SELECT name FROM city WHERE id = '211';
    name
------------
 Brasï¿½lia

 carmen=# SELECT name, district, countrycode FROM city WHERE population = 91084;
     name     |  district  | countrycode
--------------+------------+-------------
 Santa Monica | California | USA
(1 row)


She's in ___Santa Monica California USA_________________________!







