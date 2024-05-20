# Basic Steps for Building an Express API with Sequelize

## 🛠️ Install modules
## Init project
```sh
npm init -y
```

### Express
```sh
npm i express
```


### Sequelize
```sh
npm i sequelize mysql2 sequelize-cli
```

### Additional modules
```sh
npm i -D nodemon
npm i bcrypt
npm i jsonwebtoken
npm i dotenv
npm i cors
```

## ⚙️ Configurations

### Initial project structure
```sh
├── src
│   ├── controllers
│   ├── database
│   │   ├── migrations
│   │   ├── seeders
│   │   └── db.js
│   ├── middlewares
│   ├── models
│   ├── app.ts
├── .env
├── .env-example
├── .gitignore
├── .sequelizerc
├── package.json
├── README.md
```

### `package.json`
```json
{
    "main": "./src/app.js",
    "scripts": {
        "dev": "nodemon ./src/app.js",
        "migrate": "sequelize-cli db:migrate",
        "undo": "sequelize-cli db:migrate:undo",
        "seed": "sequelize-cli db:seed:all"
    },
}
```


### `.sequelizerc`
```js
require('dotenv').config(); 
const path = require("path");

module.exports = {
   config: path.resolve("./src/config", "config.json"),
   "models-path": path.resolve("./src/models"),
   "seeders-path": path.resolve("./src/database/seeders"),
   "migrations-path": path.resolve("./src/database/migrations"),
};
```


### `.env`
```env
NODE_ENV=development
DATABASE_URL=mysql://root:1234@localhost:3306
```

### `app.js` 

```js
const express = require('express')
const dotenv = require('dotenv')
dotenv.config();

const app = express()

const PORT = process.env.PORT || 4000

app.get('/api/healthy', (req, res) => {
  res.status(200).json(
    {
      success: true,
      message: "My APP server is healthy" 
    }
  )
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
```



### Start server
```sh
$ npm run dev
```

## 📜 Main Sequelize CLI scripts

### Init sequelize project
```sh
$ npx sequelize-cli init
```
### Create database
```sh
$ npx sequelize-cli db:create
```


### Create models and migrations (example)
```sh
$ npx sequelize-cli model:generate --name User --attributes 'first_name:string,last_name:string,email:string,password:string,is_active:boolean,role_id:integer'
```
### Execute migrations
```sh
$ npx sequelize-cli db:migrate
```

### Revert migrations
```sh
$ npx sequelize-cli db:migrate:undo
```

### Generate seeds (example)
```sh
$ npx sequelize-cli seed:generate --name users
```

### Execute seeds
```sh
$ npx sequelize-cli db:seed:all
```