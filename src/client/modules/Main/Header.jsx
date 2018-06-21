import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
  <div className="header">
    <div className="container pt-2">
      <Link to="/"><img alt="" className="logo" src="https://assets.fstatic.nl/master_1805/assets/components/logo/fundawonen-logo.svg" /></Link>
    </div>
  </div>
)
