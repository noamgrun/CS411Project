import React from 'react';
import  { Link } from 'react-router-dom';
import PostList from './posts/PostList.js';

const FrontPage = () => {
//<PostList />
    return (
        <div className="row">
            <div className="col s8">
                <h1>Frontpage Posts</h1>
                <PostList />
            </div>
            <div className="col s4">
                <h1>Submenu</h1>
            </div>
            <div className="fixed-action-btn">
                <Link to="/posts/new" className="btn-floating btn-large green">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    )

};

export default FrontPage;
