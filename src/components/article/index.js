import React, { Suspense, useEffect, useState } from 'react';

import Article from './article';

import api from '../../api';

const ArticleWrapper = ({ id }) => {
    const [data, setData] = useState({ read: () => ({})});

    useEffect(() => {
        setData(api.article(id));
    }, [id])

    return (
        <Suspense fallback="Loading...">
            <Article data={data} />
        </Suspense>
    )
}

export default ArticleWrapper;