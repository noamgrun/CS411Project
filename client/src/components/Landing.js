//component part is new
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

const FIELDS = [
	{ name:'city' }
];

//<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
class Landing extends Component  {

	renderFields(){
		return _.map(FIELDS, ({name}) => {
			return (
				<Field key={name} component="input" type="text" name={name}/>
			);
		});
	}

	handleSubmit(){
	        console.log("43.211");
            values => new Promise((resolve, reject) => {
                fetch("/api/weather", {method: "get", body: JSON.stringify(values)})
                    .then(res => res.json())
                    .then(res => {
                        resolve(res.data)
                    })
            });
        }

	render(){
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Views</h1>
				Search city to find current temperature.

				<form onSubmit={this.handleSubmit}>
					{this.renderFields()}
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
};

export default reduxForm({
	form: 'cityForm'
})(Landing);