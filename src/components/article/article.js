import React from 'react';

import { Header } from './components'

const Article = ({ data }) => {
    const { title, url, time, score, id } = data.read();

    return (
        <> 
            <Header title={title} time={time} score={score} url={url} />
        </>
        // <div>Article - {title}</div>
    );
};

export default Article;
// Story title
// Story URL
// Story timestamp
// Story score
// Author id
// Author karma score
// A dummy image (not from API – just a static asset)