import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				//spread operator:existing state
				contacts: state.contacts.filter((contact) => contact.id !== action.payload)
			};
		default:
			return state;
	}
};
export class Provider extends Component {
	//this is where we are going to have our state, it is also going to be the global state of the application

	state = {
		contacts: [
			{ id: 1, name: 'Elemson Ifeanyi', email: 'ielemson@gmail.com', phone: '08067407355' },
			{ id: 2, name: 'Destiny Brotobor', email: 'ielemson@gmail.com', phone: '08067407355' },
			{ id: 3, name: 'Tochi cool', email: 'ielemson@gmail.com', phone: '08067407355' },
			{ id: 4, name: 'Emeka Filbert', email: 'ielemson@gmail.com', phone: '08067407355' },
			{ id: 5, name: 'Dominic Iweze', email: 'ielemson@gmail.com', phone: '08067407355' }
		],
		dispatch: (action) => this.setState((state) => reducer(state, action))
	};

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
