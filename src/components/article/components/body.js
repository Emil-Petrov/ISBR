
// import api from '../../../api';
import UserData from './userData';
import User from '../../user';

const body = ({ user }) => {
    return <User user={user} render={data => {
        return <UserData data={data} />
    }} />
}

export default body;