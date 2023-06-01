<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio

```
https://github.com/helmer9006/nest-pokedex.git
```

2. Ejecutar

```
Yarn install
```

3. Tener Nest CLI instalado

```
yarn install -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo `.env.template` y renombrar la copia a `.env`

6. Llenar las variables de entorno definidas en el `.env`

7. Ejecutar aplicación en dev:
   `Yarn start:dev`

8. Recontruir base de datos con las semillas

```
http://localhost:3000/api/v2/seed/
```

## Stack usado

- MongoDB
- NestJS

# Production Build

1. Crear el archivo `.env.prod`
2. Llenar las variables de entorno
3. Crear la nueva imagen

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

# Notas

Heroku redeploy sin cambios:

```
git commit --allow-empty -m "Tigger Heroku deploy"
git push heroku <master|main>
```
