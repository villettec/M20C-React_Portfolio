import React from 'react'
import { Helmet } from 'react-helmet-async';
import Projects from '../components/Projects'

const Portfolio = () => {
  return (
    <div>
    <Helmet>
    <title>Villette's Projects</title>
    <meta name='description' content="Villette's Projects" />
    </Helmet>

      <Projects/>

    </div>
  )
}

export default Portfolio