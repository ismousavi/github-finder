import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContex from '../../context/alert/AlertContext';

function Search(props) {

    const githubContext = useContext(GithubContext);
    const alertContext  = useContext(AlertContex)


    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 0) {
            githubContext.searchUsers(text);
            setText('');
        } else {
            alertContext.setAlert('Please enter something!', 'light');
        }
    };

    const onChange = (e) => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="from" >
                <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" onClick={onSubmit} />
            </form>

            {githubContext.users.length > 0 && (
                <button className="btn btn-light btn-block"
                    onClick={githubContext.clearUsers} >
                    Clear
                </button>
            )}

        </div>
    );
}

export default Search;
