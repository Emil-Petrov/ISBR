
import { Suspense } from 'react';
import { Header, UserData, Image, Karma } from './components'

const article = ({ data }) => {
    const { title, url, time, score: postKarma, by: username } = data.read();
    
    return (
        // Order prop sorts the posts...
        <div className="article" style={{
            order: postKarma
        }}> 
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