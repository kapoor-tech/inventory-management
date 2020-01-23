# inventory-management

### How to run the monorepo?

`$ lerna bootstrap`

then

`$ yarn dev`

```
Note:
1. this will run both the web and the api servers.
2. The api is making use of Postgres database inside packages/server.
3. postman collection included in the packages/server/ folder.
```


### web:

`localhost:9000`

### api:

`localhost:3000`
