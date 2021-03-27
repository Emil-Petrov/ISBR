
import Article from '../article';
import api from '../../api';

import './styles.scss';

const data = api.topArticles();

const articles = () => {
    const articles = data.read();
    return <div className="article-container">
        {articles.map(uid =>(<Article key={uid} id={uid} />))}
    </div>;
}

export default articles;