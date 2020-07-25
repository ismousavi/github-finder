import React, {useContext} from 'react';
import UserItem from "./UserItem";
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';


function Users(props) {

    // after this we can access to any state in GihubState file Provider.
    const githubContext = useContext(GithubContext);
    const {loading, users} = githubContext;

    const userStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1rem'
    };



    if (loading)
        return <Spinner />;


    return (
        <div style={userStyles}>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );

}

export default Users;