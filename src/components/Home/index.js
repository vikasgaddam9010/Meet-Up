import {Link} from 'react-router-dom'
import ReactContext from '../../ReactContext'
import Header from '../Header'

import {DivForHome, Img, Button} from './style'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <ReactContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        const renderRegisterView = () => (
          <DivForHome>
            <h1>Welcome to Meetup</h1>
            <p>Please register for the topic</p>
            <Link to="/register">
              <Button onClick={onRegister} type="button">
                Register
              </Button>
            </Link>

            <Img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </DivForHome>
        )

        const rendeRregisteredView = () => (
          <DivForHome>
            <h1>Hello {name}</h1>
            <p>Welcome to {topic}</p>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </DivForHome>
        )
        return (
          <>
            <Header />
            {isRegistered ? rendeRregisteredView() : renderRegisterView()}
          </>
        )
      }}
    </ReactContext.Consumer>
  )
}
export default Home
