
import { Suspense } from 'react';
import { Header, UserData, Image } from './components'
import Loader from '../loader';

const article = ({ data }) => {
    const { title, url, time, score, by: username } = data.read();
    
    return (
        <div className="article"> 
            <Image />
            <div className="content">
                <Header title={title} time={time} score={score} url={url} />
                <Suspense fallback='Loading...'>
                    <UserData user={username} />
                </Suspense>
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