import ReactContext from '../../ReactContext'
import Header from '../Header'
import {DivForRegister, Img, DivForForm, Button} from './style'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <ReactContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const submitForm = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <>
          <Header />
          <DivForRegister>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <DivForForm onSubmit={submitForm}>
              <h1>Let us join</h1>
              <div className="input-label">
                <label htmlFor="name" className="label">
                  NAME
                </label>
                <input
                  id="name"
                  onChange={onChangeName}
                  value={name}
                  className="input-select"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="input-label">
                <label htmlFor="topic" className="label">
                  Topics
                </label>
                <select
                  value={topic}
                  onChange={onChangeTopic}
                  id="topic"
                  className="input-select"
                >
                  {topicsList.map(topic => (
                    <option value={topic.id} key={topic.id}>
                      {topic.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <Button type="submit">Register Now</Button>

              {showError && <p>Please enter your name</p>}
            </DivForForm>
          </DivForRegister>
        </>
      )
    }}
  </ReactContext.Consumer>
)

export default Register
