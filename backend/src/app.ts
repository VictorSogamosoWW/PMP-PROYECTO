import express, {Application} from 'express';
import cors from 'cors';
import routes from './routes/upload.routes';

class App {
    public app: Application;

<<<<<<< HEAD
    constructor() {
        console.log('App constructor called');
        this.app = express();
        this.routes();
        this.config();
      }
      
      private routes() {
        console.log('Routes middleware mounted');
        this.app.use('/api/uploads', routes);
      }
      
      private config(): void {
        console.log('Config middleware applied');
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
      }
=======
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        //Cors
        this.app.use(cors());
        //Parseo
        this.app.use(express.json());
    }

    private routes(){
        this.app.use('api/upload', routes);
    }
>>>>>>> 1238d59558643b1305fd11d6217fa0fc62254847
}
export default new App().app;