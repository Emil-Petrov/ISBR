import { useState, useEffect, Suspense } from 'react';
import api from '../../api';

const User = ({ user, render }) => {
    const [data, setData] = useState({ read: () => ({})});

    useEffect(() => {
        setData(api.user(user));
    }, [user]);

    return (
        <Suspense fallback='Loading User...'>
            {render(data)}
        </Suspense>
    );
}

export default User;