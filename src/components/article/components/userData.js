import User from '../../user';
import Karma from './karma';

const userData = ({ data }) => {
    if (!data) return null;

    const { id, karma } = data.read();

    return (
        <div className="user-data">
            <div className="name">{id}</div>
            <Karma count={karma} />
        </div>
    )
}

const dataWrapper = ({ user }) => <User user={user} render={(data) => userData({ data })} />;

export default dataWrapper;