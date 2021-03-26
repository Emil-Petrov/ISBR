
import Article from '../article';
import api from '../../api';

const data = api.topArticles();

const articles = () => {
    const articles = data.read();
    return articles.map(uid =>(<Article key={uid} id={uid} />));
}

export default articles;