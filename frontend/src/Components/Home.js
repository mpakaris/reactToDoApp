import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import Header from '../../src/assets/header.PNG'
import styles from './Home.module.css'

const Home = () => {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTasks()
      setTasks(result.data)
    };
    fetchData()
  }, []);

  const getTasks = async () => {
    setSpinner(true)
    let response;
    await axios({
      url: 'http://localhost:5000/api/getTasks',
      method: 'get',
    }).then(res => {
      response = res;
      setSpinner(false)
    })
    return response;
  }

  const addTask = async (task) => {
    setSpinner(true)
    await axios({
      url: 'http://localhost:5000/api/addTask',
      method: 'post',
      data: task
    }).then(res => {
      setTasks(res.data);
      setSpinner(false)
    })
  }

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask({
      name: newTask,
      status: false
    })
    setNewTask('')
  }

  const deleteTask = async (taskName) => {
    setSpinner(true)
    await axios({
      url: 'http://localhost:5000/api/deleteTask',
      method: 'delete',
      data: {
        name: taskName
      }
    }).then(res => {
      setTasks(res.data);
      setSpinner(false)
    })
  }

  const changeStatus = async (taskName) => {
    setSpinner(true)
    await axios({
      url: 'http://localhost:5000/api/changeStatus',
      method: 'put',
      data: {
        name: taskName
      }
    }).then(res => {
      setTasks(res.data);
      setSpinner(false)
    })
  }

  return (
    <div className={styles.home}>
      {
        spinner && <Spinner animation="border" role="status" style={{ position: 'absolute', left: '45%', top: '50%' }}>
        </Spinner>
      }
      <img src={Header} alt="header" />
      <p className='h3 text-center my-3'>TASK MASTER</p>
      {tasks && tasks.map(task => {
        return (
          <Container className={`border py-3 my-3 ${task.status ? "border-success" : "border-warning"}`} key={tasks.indexOf(task)}>
            <Row>
              <Col xs={2} md={2} className="d-flex align-items-center">
                <Form.Check checked={task.status} aria-label="option" onChange={() => changeStatus(task.name)} />
              </Col>
              <Col xs={5} md={7} className="d-flex align-items-center">
                {task.name}
              </Col>
              <Col xs={5} md={3} className="d-flex justify-content-center align-items-center">
                <p style={{ cursor: 'pointer', marginBottom: '0px' }} onClick={() => deleteTask(task.name)}>Löschen</p>
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
