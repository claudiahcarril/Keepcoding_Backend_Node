# Nodepop

Deploy:
```sh
npm install
```

Load initial data to database:
```sh
npm run init-db
```

Start the application in production with:
```sh
npm start
```

Start the application in development with:
```sh
npm run dev
```

# Endpoints
GET /api/anuncios
```
http://localhost:3000/api/anuncios
```
Parameters:

- name= filter by name
- sale= filter by sale
- tags= filter by tags
- minPrice= filter by minim price
- maxPrice= filter by maximum price
- &skip= 
- &limit=


POST http://localhost:3000/api/anuncios

PUT http://localhost:3000/api/anuncios/:id

DELETE http://localhost:3000/api/anuncios/:id

GET TAGS LIST http://localhost:3000/api/anuncios/tags


# Photos
- Example: http://localhost:3000/public/images/bici.jpg