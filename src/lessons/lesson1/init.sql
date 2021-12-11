create table veranstaltungsart(veranstaltungsartID integer primary key, veranstaltungsart_beschreibung varchar);
insert into veranstaltungsart(veranstaltungsart_beschreibung) values ('Große Party'), ('Outdoor Grillen'), ('Outdoor Festival'), ('Indoor Festival'), ('Konzert'), ('Konferenz');

create table locationtyp(locationtypID integer primary key, locationtyp_beschreibung varchar);
insert into locationtyp(locationtyp_beschreibung) values ('outdoor'), ('indoor'), ('online');

create table location(locationID integer primary key, locationtypID integer, location_name varchar, foreign key (locationtypID) references locationtyp(locationtypID));
insert into location(locationtypID, location_name) values (1 ,'Duesseldorf'), (1, 'Münster'), (1, 'Essen'), (2, 'Düsseldorf Stadthalle'), (2, 'Ratingen Stadthalle'), (2, 'Rush hour'), (3, 'Google meet'), (3, 'Teams'), (3, 'Twitch');

create table veranstaltung(veranstaltungsID integer primary key, veranstaltungsartID integer, locationID integer, datum date, uhrzeit time, foreign key (veranstaltungsartID) references veranstaltungsart(veranstaltungsartID), foreign key (locationID) references Location(locationID));
insert into veranstaltung(veranstaltungsartID, locationID, datum, uhrzeit) values (1, 1, '2020-01-01','21:00'), (6, 7, '2021-01-01', '9:00'), (6, 7, '2022-01-01','9:30'), (2, 2, '2023-01-01','12:00'), (3, 3, '2024-01-01','17:00');

create table location_Sitze(LfdNr integer primary key, locationID integer, kategorie varchar, sitznummer integer, foreign key (locationID) references location(locationID));
insert into location_Sitze(locationID, kategorie, sitznummer) values (1, 'Liegeplatz', 1), (2, 'Liegeplatz', 2), (3, 'Sitzplatz', 3), (4, 'Sitzplatz', 4), (5, 'Stehplatz', 5), (6, 'Stehplatz', 6), (7, 'Stehplatz', 7);

create table belegung(belegungID integer primary key, location_sitze_LfdNr integer, veranstaltungsID integer, foreign key (location_sitze_LfdNr) references location_sitze(LfdNr), foreign key (veranstaltungsID) references veranstaltung(veranstaltungsID));
insert into belegung(location_sitze_LfdNr, veranstaltungsID) values (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6);