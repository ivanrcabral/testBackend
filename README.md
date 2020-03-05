## Test Back-end Nodejs

1. Instalar nodejs: https://nodejs.org/en/
2. Instalar git en el ordenador
3. Hacer git clone del repositorio https://github.com/ivanrcabral/testBackend
4. Instalar via terminal los modulos de node “npm install”
5. Comenzar la aplicación “npm start”

# Tarea 1
En /server/middlewares/type.js:3 crear un validador para que solo acepte numeros en el parametro productId

# Tarea 2
En /server/middlewares crear un nuevo archivo llamado "authToken.js" para que solo acepte el parametro "tokenPass" numero "123a45b678c", si es error devolver el mensaje de error ejemplo (res.status(200).send({ error: true, msg: 'invalid token' });)

# Tarea 3
En /server/api.js:18 agregar el middleware creado en la tarea numero 2