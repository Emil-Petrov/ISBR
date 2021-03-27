import React, { Suspense, useEffect, useState } from 'react';
import Loader from '../loader';
import Article from './article';

import api from '../../api';

const ArticleWrapper = ({ id }) => {
    const [data, setData] = useState({ read: () => ({}) });

    useEffect(() => {
        if (id) setData(api.article(id));
    }, [id])

    return (
        <Suspense fallback={(
            <div className="loader-container">
                <Loader />
            </div>
        )}>
            <Article data={data} />
        </Suspense>
    )
}

export default ArticleWrapper;