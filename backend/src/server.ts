import app from './app';
import db from './model/schema';

const puerto = process.env.PORT || 4000;



app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en el puerto: ${puerto}`);
});