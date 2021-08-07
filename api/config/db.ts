import * as mongoose from 'mongoose';
import NewsService from "../services/newsService";

class Database {

    private DB_URL = `mongodb://mongo-db/notes-db`;

    async Init() {

        let news = [
            {
                "hat": "Doria diz que governo federal entregou só metade de lote da Pfizer a SP",
                "title": "Segundo o governador, 228 mil doses a menos foram entregues, o que pode prejudicar calendário de imunização. O G1 entrou em contato com o Ministério da Saúde, mas não havia obtido resposta até a última atualização desta reportagem.",
                "text": "O governador de São Paulo, João Doria (PSDB), afirmou nesta quarta-feira (4) que o Ministério da Saúde entregou ao estado apenas metade do previsto no lote mais recente de vacinas da Pfizer contra a Covid-19. Segundo a gestão estadual, foram repassadas 228 mil doses de um total de 456 mil a que São Paulo teria direito na divisão proporcional entre os estados (o critério é o tamanho da população). Isso poderia comprometer o calendário já anunciado, especialmente na imunização de adolescentes (leia mais abaixo). O G1 entrou em contato com o Ministério da Saúde para confirmar a informação, mas não havia obtido retorno até a última atualização desta reportagem.",
                "author": "Por Marina Pinhoni e Patrícia Figueiredo, G1 SP — São Paulo",
                "img": "http://imagem.com.br/f_446243.jpg",
                "link": "https://g1.globo.com/sp/sao-paulo/noticia/2021/08/04/doria-afirma-que-governo-federal-entregou-so-metade-de-lote-de-vacinas-da-pfizer-previsto-para-sp.ghtml",
                "active": true
            },
            {
                "hat": "Butantan entrega novo lote da Coronavac ao governo federal com 2 milhões de doses",
                "title": "Desde o início da pandemia, 64,8 milhões de doses da vacina feita em parceria com farmacêutica chinesa foram repassadas ao Ministério da Saúde. Governo de SP cria container itinerante para identificar variantes da doença no estado.",
                "text": "O governo de São Paulo liberou na manhã desta quarta-feira (4) um novo lote de vacinas com 2 milhões de doses da CoronaVac, do Instituto Butantan, ao Programa Nacional de Imunizações (PNI) do Ministério da Saúde. As vacinas liberadas nesta quarta fazem parte do segundo contrato firmado com o Ministério da Saúde, de 54 milhões de vacinas. O primeiro, de 46 milhões, foi concluído em 12 de maio. O Butantan diz que vai concluir a entrega das 100 milhões de doses até o fim de agosto, um mês antes do previsto.",
                "author": "Por G1 SP — São Paulo",
                "img": "http://imagem.com.br/f_446243.jpg",
                "link": "https://g1.globo.com/sp/sao-paulo/noticia/2021/08/04/butantan-entrega-novo-lote-de-coronavac-ao-governo-federal-com-2-milhoes-de-doses.ghtml",
                "active":true
            },
            {
                "hat": "Valinhos aplica teste rápido para diagnóstico de Covid-19 com resultado em 15 minutos na UPA",
                "title": "Pessoas que estejam no primeiro dia de sintomas gripais ou respiratórios, que podem indicar infecção por coronavírus, podem fazer o teste de antígeno nas unidades de saúde da cidade.",
                "text": "A Secretaria de Saúde de Valinhos (SP) começou a aplicar nesta quarta-feira (4) testes rápidos de antígenos para diagnóstico da Covid-19 na Unidade de Pronto-Atendimento (UPA) da cidade. São exames feitos a partir da coleta de secreção nasal com cotonete e que apontam a presença de infecção por coronavírus, principalmente entre o 1º e o 7º dia após contágio. O resultado sai em 15 minutos. Pessoas que já tomaram a vacina e apresentarem os sintomas gripais ou respiratórios, que podem indicar Covid-19, também podem fazer o teste - já que ele localiza a presença de infecção, e não os anticorpos, como outros exames. A eficácia do exame é de 98% e a prefeitura espera, com a medida, ampliar o controle da doença na cidade. Ao todo, foram entregues pelo governo do estado 6.220 testes rápidos de antígenos. Os exames RT-PCR continuam sendo feitos também, mas são indicados a partir de três dias de sintomas.",
                "author": "Por G1 Campinas e Região",
                "img": "http://imagem.com.br/f_446243.jpg",
                "link": "https://g1.globo.com/sp/campinas-regiao/noticia/2021/08/04/valinhos-aplica-teste-rapido-para-diagnostico-de-covid-19-com-resultado-em-15-minutos-na-upa.ghtml",
                "active":true
            }
        ];

        return await NewsService.init(news);
    };

    createConnection() 
    {
        mongoose.connect(this.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        
        mongoose.connection.once('open', () => 
        { 
            console.log('Database connected ⚡');

            this.Init();

            console.log('Collections started 🏁');
        });

        mongoose.connection.on('error', () => console.error('connection error:'));
    }
}

export default Database;
