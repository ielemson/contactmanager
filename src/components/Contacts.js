import React, { Component } from 'react'
import Contact  from './Contact'

 class Contacts extends Component {
     state={
         contacts:[
             {id:1, name:'Elemson Ifeanyi', email:'ielemson@gmail.com', phone:'08067407355'},
             {id:2, name:'Destiny Brotobor', email:'ielemson@gmail.com', phone:'08067407355'},
             {id:3, name:'Tochi cool', email:'ielemson@gmail.com', phone:'08067407355'},
             {id:4, name:'Emeka Filbert', email:'ielemson@gmail.com', phone:'08067407355'},
             {id:5, name:'Dominic Iweze', email:'ielemson@gmail.com', phone:'08067407355'}
         ]
     }

     DeleteContact = (id)=>{
    const {contacts}= this.state;
    const newContact = contacts.filter(contact=>contact.id !==id);

    this.setState({
      contacts : newContact
    });
     }
  render() {
      const {contacts}= this.state;
    return (
      <React.Fragment>
   {contacts.map(contact=>(
      <Contact contact={contact} key={contact.id} ClickedDeleteHandler={this.DeleteContact.bind(this,contact.id)}/>
   ))}
      </React.Fragment >
    )
  }
}
export default Contacts;