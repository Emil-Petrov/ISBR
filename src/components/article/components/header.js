import moment from 'moment';

const articleHeader = ({ title, time, score, url}) => {
    const timeFormat = 'DD-MM-YYYY: HH:mm';

    return <div className="header">
        <h4 className="title">{title}</h4>
        <a className="timestamp" href={url}>{moment.unix(time).format(timeFormat)}</a>
        <div className="score">{score}</div>
    </div>
}

export default articleHeader;