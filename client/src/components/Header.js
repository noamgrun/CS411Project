import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

	renderContent() {

		switch (this.props.auth) {

			case null:
				return;

			case false:
				return [
					<li key='fb-login'>
						<a href="/auth/facebook">Login With Facebook</a>
					</li>,
					<li key='google-login'>
						<a href="/auth/google">Login With Google</a>
					</li>
				];

			default:
				return [
					<li key="groups">
						<a href="/groups">Groups</a>
					</li>,
					<li key="profile">
						<a href="/profile">Profile</a>
					</li>,
					<li key="logout" >
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}

	render() {

		return (
			<nav>
				<div className = "nav-wrapper">
					<Link 
						to = {this.props.auth ? '/wall' : '/'}
						className = "left brand-logo"
					>
					Views
					</Link>
					<ul className = "right">
						{ this.renderContent() }
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {

	return { auth };
}

export default connect(mapStateToProps)(Header);