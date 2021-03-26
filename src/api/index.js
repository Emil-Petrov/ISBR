import config from "./config";

function wrapPromise(promise) {
    let status = 'pending'
    let response

    const suspender = promise.then(
        (res) => {
            status = 'success'
            response = res
        },
        (err) => {
            status = 'error'
            response = err
        },
    )

    const read = () => {
        switch (status) {
            case 'pending':
                throw suspender
            case 'error':
                throw response
            default:
                return response
        }
    }

    return { read }
}

const fetchArticles = (count = 10) => {
    const promise = fetch(`${config.baseURL}/topstories.json`)
        .then(r => r.json())
        .then(data => data.splice(0, count));

    return wrapPromise(promise);
}

const fetchItem = (id) => {
    const promise = fetch(`${config.baseURL}/item/${id}.json`)
        .then(r => r.json());
    return wrapPromise(promise);
}

const fetchArticle = (articleId) => {
    return fetchItem(articleId)
}

const fetchUser = (userName) => {
    const promise = fetch(`${config.baseURL}/user/${userName}.json`)
        .then(r => r.json());
    return wrapPromise(promise);
}

const api = {
    topArticles: fetchArticles,
    user: fetchUser,
    article: fetchArticle,
    item: fetchItem,
}

export default api;