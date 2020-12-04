import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Header from '../../src/assets/header.PNG'
import styles from './Home.module.css'

const Home = () => {

  const toDos = [
    {
      name: 'Task 1',
      status: true
    },
    {
      name: 'Task 2',
      status: false
    },
    {
      name: 'Task 3',
      status: true
    }
  ]

  const [tasks, setTasks] = useState(toDos)
  const [newTask, setNewTask] = useState('')

  const changeStatus = (taskName) => {
    let tasksChange = [...tasks];
    tasksChange.map(task => {
      if (task.name === taskName) {
        task.status = !task.status
      }
    })
    setTasks(tasksChange)
  }

  const deleteTask = (taskName) => {
    let newTaskArray = tasks.filter(task => {
      if (task.name !== taskName) {
        return task
      }
    })
    setTasks(newTaskArray)
  }

  const handleChange = (e) => {
    setNewTask(e.target.value)
    console.log(newTask)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit works", newTask)
    let taskList = [...tasks]
    taskList.push({
      name: newTask,
      status: false
    })
    setTasks(taskList)
    setNewTask('')
  }

  return (
    <div className={styles.home}>
      <img src={Header} alt="header" />
      <p className='h3 text-center my-3'>TASK MASTER</p>
      {tasks && tasks.map(task => {
        return (
          <Container className={`border py-3 my-3 ${task.status ? "border-success" : "border-warning"}`} key={tasks.indexOf(task)}>
            <Row>
              <Col xs={2} md={2} >
                <Form.Check checked={task.status} aria-label="option" onChange={() => changeStatus(task.name)} />
              </Col>
              <Col xs={5} md={7} >
                {task.name}
              </Col>
              <Col xs={5} md={3} >
                <p className={styles.cursor} onClick={() => deleteTask(task.name)}>Löschen</p>
              </Col>
            </Row>
          </Container>
        )
      })}
      <div className='formInput d-flex justify-content-center mt-5'>
        <Form onSubmit={handleSubmit} style={{ width: '80%' }}>
          <Form.Group controlId="formBasicText px-0">
            <Form.Label>
              <p className='h6'>Neue Aufgabe:</p>
            </Form.Label>
            <Form.Control type="text" value={newTask} onChange={handleChange} placeholder="z.B. Code Review für Merge Request #34" />
            <div className="d-flex justify-content-end">
              <Button variant="dark" type="submit" className='mt-3'>
                Jetzt Anlegen!
            </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default Home
