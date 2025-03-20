import express, {Application} from 'express';
import cors from 'cors';
import routes from './routes/upload.routes';
import db from './model/schema';

class App {
    public app: Application;

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
}
export default new App().app;