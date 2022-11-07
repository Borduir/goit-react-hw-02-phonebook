import ContactListItem from './ContactListItem/ContactListItem'
import PropTypes from 'prop-types'

import css from './ContactList.module.css'

export default function ContactList({ props }) {
  const {contacts, filtre} = props.state
    let filteredConacts = contacts.filter(contact => contact.name.toLowerCase().includes(`${filtre.toLowerCase()}`))
  return (
    <ul className={css.list}> 
    {filteredConacts.map(contact => {
      return (ContactListItem(contact, props, contacts))
    })}
    </ul>
    )
}
  
ContactList.propTypes = {
  props: PropTypes.shape({
      state: PropTypes.shape({
          contacts: PropTypes.array,
          filtre: PropTypes.string
        }),
    }).isRequired
}