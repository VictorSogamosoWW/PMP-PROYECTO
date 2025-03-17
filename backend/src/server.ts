import app from './app';

<<<<<<< HEAD
const puerto = process.env.PORT || 4000;
=======
const puerto = process.env.PORT || 3000;
>>>>>>> 1238d59558643b1305fd11d6217fa0fc62254847

app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en el puerto: ${puerto}`);
});