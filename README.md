### How to create new lesson

1. Create `/src/lessons/lesson{nr}/index.tsx`
2. Create `/src/lessons/lesson{nr}/init.sql`
3. Export new lesson from `/src/lessons/index.tsx`
4. Add lesson image to `/public/assets/images/lesson{nr}.png`
5. run `sqlite3 public/assets/databases/lesson{nr}.sqlite < /src/lessons/lesson{nr}/init.sql`
6. Inside `/pages/lessons/[lessonNr]/index.tsx` update switch case

Thats it.
