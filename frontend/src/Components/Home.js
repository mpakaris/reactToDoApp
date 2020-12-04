import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
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

  const changeStatus = (name) => {

    let tasksChange = [...tasks];
    tasksChange.map(task => {
      if (task.name === name) {
        task.status = !task.status
      }
    })
    console.log(tasksChange)
    setTasks(tasksChange)



  }

  const deleteTask = () => {
    console.log("Delete Function")
  }

  return (
    <div className={styles.home}>
      { tasks && tasks.map(task => {
        return (
          <div key={tasks.indexOf(task)}>
            <div className={styles.task}>
              <Container>
                <Row>
                  <Col xs={2}>
                    <Form.Check checked={task.status} aria-label="option" onChange={() => changeStatus(task.name)} />
                  </Col>
                  <Col xs={7}>
                    {task.name}
                  </Col>
                  <Col xs={3} onClick={deleteTask}>
                    <p className={styles.delete}>Delete</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
