import PropTypes from 'prop-types'
import css from './Filtre.module.css'

export default function Filtre({ props }) {
const handleChange = (event) => {
            const { name, value } = event.currentTarget
    props.setState({ [name]: value })

    }
    return (
        <label className={css.label}> Search by name
            <input
                value={props.state.filtre}
                onChange={handleChange}
                className={css.input}
                type="text"
                name="filtre"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>)
}

Filtre.propTypes = {
  props: PropTypes.shape({
      state: PropTypes.shape({
          contacts: PropTypes.array,
          filtre: PropTypes.string
        }),
    }).isRequired
}