import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';

class FrontPageList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {

        return this.props.posts.map(post => {
            return (
                <div className="card darken-1" key={post._id}>
                    <div className="card-content">
                        <span className="card-title">{post._user}</span>
                        <p>
                            {post.image}
                        </p>
                        <p className="right">
                             {new Date(post.dateCreated).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a>Props: {}</a>
                        <a>Comments: {}</a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderPosts()}
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(FrontPageList);
