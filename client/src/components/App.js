import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header.js';
import FrontPage from './FrontPage.js';
import Dashboard from './Dashboard.js';
import SurveyNew from './surveys/SurveyNew.js';
import PostNew from './posts/PostNew.js';
import Profile from './Profile.js';
//const SurveyNew = () => <h2>Survey New</h2>


class App extends Component {

	componentDidMount() {

		this.props.fetchUser();

	}

	render() {
		return (

			<BrowserRouter>
				<div className="main">
					<Header />
					<div className="container">
						<Route exact path="/" component={FrontPage} />
						<Route exact path="/posts/new" component={PostNew} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/information" component={Dashboard} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route exact path="/surveys/new" component={SurveyNew} />
					</div>
				</div>
			</BrowserRouter>

		);
	}
};


export default connect(null, actions)(App);
