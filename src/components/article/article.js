
import { Header, Body } from './components'

const article = ({ data }) => {
    const { title, url, time, score, by: username } = data.read();
    
    return (
        <> 
            <Header title={title} time={time} score={score} url={url} />
            {username && <Body user={username} />}
        </>
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