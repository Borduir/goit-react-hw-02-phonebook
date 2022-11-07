import PropTypes from 'prop-types'
import css from './ContactListItem.module.css'
    const {button, li} = css

export default function ContactListItem(contact, props, contacts) {
    const { id, name, number } = contact;

    return(<li key={id} className={li}> {name} : {number}
        <button className={button} type="button" onClick={() => {
            props.setState({ contacts: contacts.filter(currentContact => currentContact !== contact) })
        }}>Delete</button>
    </li>)
}

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string
    }),
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string
    })),
  props: PropTypes.shape({
      state: PropTypes.shape({
          contacts: PropTypes.array,
          filtre: PropTypes.string
        }),
    }).isRequired
}