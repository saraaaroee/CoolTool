import React from 'react';
import './index.scss';

import TaskCard from '../TaskCard';
import NewTaskForm from '../NewTaskForm';

import unicorn from '../../assets/img/runningunigif.gif';

class PhasesBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          title: 'Low-fidelity prototype',
          description: 'Create prototype on paper with all the awesome functionalities. Keep it simple and obvious.',
          category: 'prototype',
        },
        {
          id: 2,
          title: 'Mobile version',
          description: 'This is a description about some cool wireframes for mobile version of application.',
          category: 'wireframes',
        },
        {
          id: 3,
          title: 'Desktop version',
          description: 'This is a really nice description about some cool wireframes for desktop version of application.',
          category: 'wireframes',
        },
      ],
      draggedTask: {},
      showUnicorn: false,
    };
  }

  remove = (id) => {
    console.log('remove', id);
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id),
    }));
  }

  addNewTask = (task) => {
    console.log('this is the task', task);
    const { tasks, showUnicorn } = this.state;
    const nextId = Number(tasks.length + 1);
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        {
          id: nextId,
          ...task,
        },
      ],
    }));
    setTimeout(() => {
      this.setState({
        showUnicorn: false,
      });
    }, 3000);
    this.setState({
      showUnicorn: !showUnicorn,
    });
  }

  drag = (e, task) => {
    console.log(task);
    this.setState({
      draggedTask: task,
    });
  }

  onDragOver = (event, category) => {
    event.preventDefault();
  }

  onDrop = (event, category) => {
    const { tasks, draggedTask } = this.state;

    const newTasks = tasks.filter((task) => {
      if (draggedTask.id === task.id) {
        task.category = category;
      }
      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    const { tasks, showUnicorn } = this.state;
    const todoTasks = tasks.filter(task => task.category === 'todo');
    const flowchartTasks = tasks.filter(task => task.category === 'flowchart');
    const wireframesTasks = tasks.filter(task => task.category === 'wireframes');
    const prototypeTasks = tasks.filter(task => task.category === 'prototype');
    const developmentTasks = tasks.filter(task => task.category === 'development');
    const testTasks = tasks.filter(task => task.category === 'test');
    const launchTasks = tasks.filter(task => task.category === 'launch');

    const unicornClass = showUnicorn ? 'unicorn show' : 'unicorn';

    return (
      <div className="phasesWrapper">
        <div
          className="phaseContainer"
          onDrop={event => this.onDrop(event, 'todo')}
          onDragOver={event => this.onDragOver(event, 'todo')}
        >
          {todoTasks.map(task => (
            <TaskCard
              key={task.id}
              onRemove={this.remove}
              onDrag={event => this.drag(event, task)}
              {...task}
            />
          ))}
        </div>
        <div
          className="phaseContainer"
          onDrop={event => this.onDrop(event, 'flowchart')}
          onDragOver={event => this.onDragOver(event, 'flowchart')}
        >
          {flowchartTasks.map(task => (
            <TaskCard
              key={task.id}
              onRemove={this.remove}
              onDrag={event => this.drag(event, task)}
              {...task}
            />
          ))}
        </div>
        <div
          className="phaseContainer"
          onDrop={event => this.onDrop(event, 'wireframes')}
          onDragOver={event => this.onDragOver(event, 'wireframes')}
        >
          {wireframesTasks.map(task => (
            <TaskCard
              key={task.id}
              onRemove={this.remove}
              onDrag={event => this.drag(event, task)}
              {...task}
            />
          ))}
        </div>
        <div
          className="phaseContainer"
          onDrop={event => this.onDrop(event, 'prototype')}
          onDragOver={event => this.onDragOver(event, 'prototype')}
        >
          {prototypeTasks.map(task => (
            <TaskCard
              key={task.id}
              onRemove={this.remove}
              onDrag={event => this.drag(event, task)}
              {...task}
            />
          ))}
        </div>
        <div
          className="phaseContainer"
          onDrop={event => this.onDrop(event, 'development')}
          onDragOver={event => this.onDragOver(event, 'development')}
        >
          {developmentTasks.map(task => (
            <TaskCard
              key={task.id}
              onRemove={this.remove}
              onDrag={event => this.drag(event, task)}
              {...task}
            />
          ))}
        </div>
        <div
          className="phaseContainer"
          onDrop={event => this.onDrop(event, 'test')}
          onDragOver={event => this.onDragOver(event, 'test')}
        >
          {testTasks.map(task => (
            <TaskCard
              key={task.id}
              onRemove={this.remove}
              onDrag={event => this.drag(event, task)}
              {...task}
            />
          ))}
        </div>
        <div
          className="phaseContainer"
          onDrop={event => this.onDrop(event, 'launch')}
          onDragOver={event => this.onDragOver(event, 'launch')}
        >
          {launchTasks.map(task => (
            <TaskCard
              key={task.id}
              onRemove={this.remove}
              onDrag={event => this.drag(event, task)}
              {...task}
            />
          ))}
        </div>
        <NewTaskForm
          submitHandler={this.addNewTask}
        />
        <div className={unicornClass}>
          <img
            src={unicorn}
            width="400px"
            height="auto"
            alt="unicorn"
          />
        </div>
      </div>
    );
  }
}

export default PhasesBoard;
