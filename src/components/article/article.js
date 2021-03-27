
import { Suspense } from 'react';
import { Header, UserData, Image, Karma } from './components'
import Loader from '../loader';

const article = ({ data }) => {
    const { title, url, time, score: postKarma, by: username } = data.read();
    
    return (
        <div className="article"> 
            <Image />
            <div className="content">
                <Header title={title} time={time} url={url} />
                <Suspense fallback='Loading...'>
                    <UserData user={username} />
                </Suspense>
                <Karma count={postKarma} className="article-karma" />
            </div>
        </div>
    );
};

export default article;
// Story title
// Story URL
// Story timestamp
// Story score
// Author id
// Author karma score
// A dummy image (not from API – just a static asset)