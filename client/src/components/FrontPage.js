import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';
//import PostList from './posts/PostList.js';
import FrontPageList from './posts/FrontPageList.js';

class FrontPage extends Component {

    renderAddbutton() {
        switch (this.props.auth) {

            case null:
				return;

			case false:
                return (
                    <a href="/auth/google" className="btn-floating btn-large green">
                        <i className="material-icons">add</i>
                    </a>
                );

			default:
                return (
                    <Link to="/posts/new" className="btn-floating btn-large green">
                        <i className="material-icons">add</i>
                    </Link>
				);
		}
    }


    render() {
        return (
            <div className="row">
                <div className="col s8">
                    <FrontPageList />
                </div>
                <div className="col s4">
                    <h1>Submenu</h1>
                </div>
                <div className="fixed-action-btn">

                    { this.renderAddbutton() }

                </div>
            </div>
        )
    }

};

function mapStateToProps({ auth }) {

	return { auth };
}

export default connect(mapStateToProps)(FrontPage);
