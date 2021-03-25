import config from "./config";

const fetchArticles = async (count = 10) => {
    const response = await fetch(`${config.baseURL}/topstories.json`);
    const data = await response.json();
    return data.splice(0, count);
}

const fetchArticle =  async (articleId) => {
    const response = await fetch(`${config.baseURL}/item/${articleId}.json`)
    const data = await response.json();
    return data;
}

const fetchUser = async (userName) => {
    const response = await fetch(`${config.baseURL}/user/${userName}.json`)
    const data = await response.json();
    return data;
}

const api = {
    topArticles: fetchArticles,
    user: fetchUser,
    article: fetchArticle,
}

export default api;