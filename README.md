## Create new databases

From root directory run the following commands:

1. Create new lesson{lessonNr}.sql file in src/sql
2. Run sqlite3 ./public/databases/lesson{lessonNr}.sqlite < src/sql/lesson{lessonNr}.sql
3. Test if your database looks the way you want

Keep the sql files in sync!

TODO: Make translating the sql files to databases automatic
TODO: Make tables correct (values can be arrays)
