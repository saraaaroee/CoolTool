import React from 'react';
import PropTypes from 'prop-types';

import close from '../../assets/icons/close_icon.svg';

import './index.scss';

class TaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  remove = () => {
    const { onRemove, id } = this.props;
    onRemove(id);
  }

  drag = () => {
    const { onDrag, id } = this.props;
    onDrag(id);
  }

  render() {
    const { title, description } = this.props;
    return (
      <div
        draggable
        onDrag={this.drag}
        className="cardContainer"
      >
        <div className="titleContainer">
          <h4>{title}</h4>
          <button
            type="button"
            onClick={this.remove}
          >
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="descriptionContainer">
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

TaskCard.propTypes = {
  onDrag: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default TaskCard;
