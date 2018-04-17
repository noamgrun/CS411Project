import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments.js';

class Header extends Component {

	renderContent() {

		switch (this.props.auth) {

			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="pay">
						<Payments/>
					</li>,
					<li key="credits" style={{ margin: '0 10px' }}>
						Credits: { this.props.auth.credits }
					</li>,
					<li key="profile">
						<a href="/profile">{ this.props.auth.firstName }</a>
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
				<div className="nav-wrapper green">
					<div className="container">
						<Link
							to = {this.props.auth ? '/' : '/'}
							className = "left brand-logo"
						>
						Views
						</Link>
						<ul className = "right">
							{ this.renderContent() }
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {

	return { auth };
}

export default connect(mapStateToProps)(Header);
