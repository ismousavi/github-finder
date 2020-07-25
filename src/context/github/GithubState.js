import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';


const GithubState = (props) => {
    // this is our Global state in github, this is all our actions
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    // Dispatch to reducer
    const [state, dispatch] = useReducer(GithubReducer, initialState);


    // Search Github users
    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    };


    // Get single user
    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}`);

        dispatch({type: GET_USER, payload: res.data});
    };


    // Get user reps
    const getUserRepos = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);

        dispatch({type: GET_REPOS, payload: res.data});
    };

    // Clear users from state
    const clearUsers = () => dispatch({type: CLEAR_USERS});

    // Set loading
    const setLoading = () => dispatch({type: SET_LOADING});


    return <GithubContext.Provider
        value={{
            // anything we want to avalable to etire app.
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUserRepos,
            getUser,
        }}>

        {props.children}
    </GithubContext.Provider>;
};




export default GithubState;