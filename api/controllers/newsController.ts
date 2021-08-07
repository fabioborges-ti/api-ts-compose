import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import NewsService from "../services/newsService";
import helper from "../helpers/helper";

class NewsController {
    
    async get(req, res) {
        
        try 
        {
            var result = await NewsService.get();
        
            if (result.data == 0) {
                res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT);
                return;
            }

            return helper.sendResponse(res, StatusCodes.OK, result);
        } 
        catch (error) 
        {
            return helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }

    async getById(req, res) 
    {    
        const id = req.params.id;

        try 
        {
            var result = await NewsService.getById(id);
    
            if (result.data == 0) {
                res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT);
                return;
            }
    
            return helper.sendResponse(res, StatusCodes.OK, result);    
        } 
        catch (error) 
        {
            return helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }

    async create(req, res) 
    {    
        let news = req.body;

        try 
        {
            var result = await NewsService.create(news);
    
            if (result.data == 0) {
                res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
                return;
            }
    
            return helper.sendResponse(res, StatusCodes.CREATED, result);    
        } 
        catch (error) 
        {
            return helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }

    async update(req, res) 
    {    
        let id = req.params.id;
        let news = req.body;

        try 
        {
            var result = await NewsService.update(id, news);
    
            if (result.data == 0) {
                res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
                return;
            }
    
            return helper.sendResponse(res, StatusCodes.OK, result);    
        } 
        catch (error) 
        {
            return helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }

    async delete(req, res) 
    {
        let id = req.params.id;

        try 
        {
            await NewsService.delete(id);

            return helper.sendResponse(res, StatusCodes.OK, "Notícia excluída com sucesso.");
        } 
        catch (error) 
        {
            return helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }
}

export default new NewsController();
