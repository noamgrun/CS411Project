import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            location: ''
          }
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { description, location } = this.state;
        console.log(this.state.description);

        axios.post('/api/posts', { description, location })
          .then((res) => {
            //access the results here....
            console.log(res)
          });
      }


     onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
     }

    render() {

        const { description, location } = this.state;

      return (
        <form onSubmit={ this.onSubmit }>
          <label>
            Description
            <input type="text" name="description" onChange={this.onChange} value={this.state.description} />
          </label>
          <label>
            Location
            <input type="text" name="location" onChange={this.onChange} value={this.state.location}/>
          </label>
          <button type="submit">Upload</button>
        </form>
     )
    }
  }

export default PostForm;
