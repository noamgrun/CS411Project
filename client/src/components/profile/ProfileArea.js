import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import Payments from './Payments.js';

var style = {
  background: '#efefef',
};

class ProfileArea extends Component {

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
				return (
                    <div>
    					<p key="info-area">
                        { this.props.auth.firstName } {this.props.auth.lastName }
                        </p>
                        <p key="description">
                        { this.props.auth.description}
                        </p>
                    </div>
				);
		}
	}

	render() {

		return (
			<div className="row">
                <div className="col s8">
                    <h1>Posts</h1>
                </div>
                <div style={style} className="col s4 profile-area">
				    <div className="col s12">
					    <Link
						 to = {this.props.auth ? '/' : '/'}
						 className = "left brand-logo"
					    >
					    Image
					    </Link>
				    </div>
                    <div className="col s12">
                        { this.renderContent() }
                    </div>
                </div>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {

	return { auth };
}

export default connect(mapStateToProps)(ProfileArea);
