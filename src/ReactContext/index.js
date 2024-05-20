import React from 'react'

const ReactContext = React.createContext({
  isRegistered: false,
  name: '',
  topic: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})
export default ReactContext
