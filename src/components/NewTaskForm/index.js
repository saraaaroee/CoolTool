import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  handleOnChangeInput = (name, value) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    const { submitHandler } = this.props;
    const {
      title, description,
    } = this.state;

    const task = {
      title,
      description,
      category: 'todo',
    };

    submitHandler(task);

    this.setState({
      title: '',
      description: '',
    });
  }

  render() {
    const { title, description } = this.state;
    return (
      <div className="formContainer">
        <form>
          <h3>New task</h3>
          <input
            className="taskTitle"
            placeholder="Add task title..."
            value={title}
            onChange={event => this.handleOnChangeInput('title', event.target.value)}
          />
          <textarea
            className="taskDescription"
            placeholder="Add task description..."
            value={description}
            onChange={event => this.handleOnChangeInput('description', event.target.value)}
          />

          <button
            className="addBtn"
            type="button"
            onClick={this.handleSubmit}
          >
            <p>Add task</p>
          </button>

        </form>
      </div>
    );
  }
}

NewTaskForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default NewTaskForm;
