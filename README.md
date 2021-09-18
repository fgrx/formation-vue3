# formation-vue3

## Project setup

### Installe les dépendances NPM
```
npm install
```

### Installe le faux serveur REST avec le middleware d'authentification
```
npm install -D json-server json-server-auth
```

### Lancer le faux serveur REST API
```
json-server db.json --watch -m ./node_modules/json-server-auth
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
