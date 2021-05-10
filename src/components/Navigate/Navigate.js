import React from 'react'
import { NavLink } from 'react-router-dom'
import useStyles from './Navigate.style'

export const Navigate = () => {
  const classes = useStyles()
  return (
  <nav className={classes.Navigation}>
    <ul>
      <li>
        <NavLink
          className={classes.Navigation__link}
          to="/"
          exact
        >
          Главная страница
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.Navigation__link}
          to="/catalog"
        >
          Каталог
        </NavLink>
      </li>
    </ul>
  </nav>
)}
