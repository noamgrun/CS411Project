import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, FETCH_POSTS } from './types.js';

export const fetchUser = () => async dispatch => {

	const res = await axios.get('/api/current_user');
	dispatch({ type:FETCH_USER, payload:res.data });
};


export const handleToken = (token) => async dispatch => {

	const res = await axios.post('/api/stripe', token);
	dispatch({ type: FETCH_USER, payload: res.data});
};


//export cons function name = receive values -> return action in this case (object)
export const submitSurvey = (values, history) => async dispatch => {

	const res = await axios.post('/api/surveys', values);
	history.push('/surveys');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitPost = (values, history) => async dispatch => {

	const res = await axios.post('/api/posts', values);
	history.push('/');
	dispatch({ type: FETCH_USER, payload:res.data });
};


export const fetchSurveys = () => async dispatch => {

	const res = await axios.get('/api/surveys');
	dispatch({ type: FETCH_SURVEYS, payload: res.data});

}

export const fetchPosts = () => async dispatch => {

	const res = await axios.get('/api/FrontPageList');
	dispatch({ type: FETCH_POSTS, payload: res.data});

}
