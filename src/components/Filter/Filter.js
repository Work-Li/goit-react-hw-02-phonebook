import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.label__filter}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} className={s.input__filter} />
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
