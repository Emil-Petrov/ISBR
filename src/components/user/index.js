import { useState, useEffect } from 'react';

import api from '../../api';

const User = ({ user, render }) => {
    const [data, setData] = useState();

    useEffect(() => {
        if (user) setData(api.user(user));
    }, [user]);

    return render(data);
}

export default User;