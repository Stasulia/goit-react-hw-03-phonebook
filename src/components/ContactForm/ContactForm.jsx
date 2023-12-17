import { Component } from 'react';
import css from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <h2 className="title">Phonebook</h2>
        <div className={css.contactForm}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className={css.label}>
            Number
            <input
              className={css.input}
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
            <button type="submit">Add Contacts</button>
          </label>
        </div>
      </form>
    );
  }
}

export default ContactForm;
