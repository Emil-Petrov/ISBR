import User from '../../user';

const userData = ({ data }) => {
    if (!data) return null;
    
    const { id, karma } = data.read();
    
    return (
        <div className="user-data">
            <div className="name">{id}</div>
            <div className="karma">{karma}</div>
        </div>
    )
}

const dataWrapper = ({ user }) => <User user={user} render={(data) => userData({ data })} />;

export default dataWrapper;