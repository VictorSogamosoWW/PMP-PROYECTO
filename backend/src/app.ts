import express, {Application} from 'express';
import cors from 'cors';
import routes from './routes/upload.routes';

class App {
    public app: Application;

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
}
export default new App().app;