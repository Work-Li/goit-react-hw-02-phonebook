import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);
export default Filter;

// const Filter = (idContact) => {
//     console.log(idContact);

//     this.setState(prevState => ({
//         contacts: prevState.contacts.map(contact => {
//             if (contact.id === idContact) {
//                 console.log('you found the right contact');
//                 return {
//                     ...contact
//                 };
//             }
//             return contact;
//         }),
//     }));
// };
