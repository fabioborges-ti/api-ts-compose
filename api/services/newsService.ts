import NewsRepository from "../repositories/newsRepository";

class NewsService {

    async init(news) {

        const result = await NewsRepository.insertMany(news);
      
        return {
            data: result
        }
    }
    
    async get() {
        
        const result = await NewsRepository.find({});

        if (result.length == 0) {
            return { 
                data: 0 
            };
        }
        
        return { 
            data: result 
        } 
    }

    async getById(id) {
        
        const result = await NewsRepository.findById(id); 
        
        if (result.length == 0) {
            return { 
                data: 0 
            };
        }
        
        return { 
            data: result 
        } 
    }

    async create(news) {

        const result = await NewsRepository.create(news);
        
        if (result == null) {
            return {
                data: 0
            }
        } 
        
        return { 
            data: result
        }
    }

    async update(_id, news) {

        const result = await NewsRepository.findByIdAndUpdate(_id, news);
        
        if (result == null) {
            return {
                data: 0
            }
        } 
        
        return { 
            data: result
        } 
    }

    async delete(_id) 
    {
        return await NewsRepository.findByIdAndRemove(_id); 
    }
}

export default new NewsService();
