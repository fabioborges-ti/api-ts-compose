import * as express from 'express';
import Database from './config/db'; 
import NewsController from './controllers/newsController';

class StartUp {
    
    public app: express.Application;

    private _database : Database;

    constructor() 
    {
        this.app = express();                   

        this._database = new Database();        
        this._database.createConnection();

        this.middleware()
        this.routes();
    }

    routes() 
    {
        this.app.route('/').get(NewsController.get);

        this.app.route("/api/v1/news").get(NewsController.get);
        this.app.route("/api/v1/news/:id").get(NewsController.getById);
        this.app.route('/api/v1/news').post(NewsController.create);
        this.app.route('/api/v1/news/:id').put(NewsController.update);
        this.app.route('/api/v1/news/:id').delete(NewsController.delete);
    }

    middleware() 
    {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }    
}

export default new StartUp();
