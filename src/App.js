import React from 'react'
import { Helmet } from 'react-helmet'

import { Homepage } from './pages/homepage'
import { Navigation } from './components/navigation/navigation'
import { Footer } from './components/footer/footer'

import { user } from './content.js'

import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      personal: {},
    }
  }

  componentDidMount() {
    fetch('') // API endpoint 
    .then(response => response.json())
    .then(userAPI => this.setState({ 
      personal: userAPI.personal[0],
    }))
    .catch(err => {
      console.log(err)
      this.setState({
        personal: user.personal[0],
      })
    })
  }

  render() {
    const { personal } = this.state
    return (
      <div>
        { personal.name ? 
        <div>
          <Helmet>
            <title> {personal.name} | {personal.headline} </title>
            <link 
              rel="canonical" 
              href={personal.domain} />
            <meta 
              name="description" 
              content={personal.short_bio} />
            <meta 
              name="keywords" 
              content={personal.keywords} />
          </Helmet>
          <Navigation />

          <Homepage personal={personal} />

          <Footer />
        </div>

        : <div className='loading'> Loading... </div>
      }
      </div>
    )
  }
}

export default App