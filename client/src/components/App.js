import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './Header.js';
import Landing from './Landing.js';
import PrivacyPage from './PrivacyPage.js';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>Survey New</h2>
const Wall = () => <h2>Wall</h2>


class App extends Component {

	componentDidMount() {

		this.props.fetchUser();
	}

	render() {
		return (

			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route exact path="/surveys/new" component={SurveyNew} />
						<Route exact path="/privacy" component = {PrivacyPage} />
						<Route exact path="/wall" component = {Wall} />
					</div>
				</BrowserRouter>
			</div>

		);
	}
};


export default connect(null, actions)(App);
