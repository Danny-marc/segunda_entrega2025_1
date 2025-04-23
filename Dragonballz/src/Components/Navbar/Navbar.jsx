import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to={"/"} className='item'>Inicio</Link>
        <Link to={"/filter/Male"} className='item'>Hombre</Link>
        <Link to={"/filter/Female"} className='item'>Mujer</Link>
        <Link to="/acerca" className="item">Acerca de</Link>

        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button variant="contained" {...bindTrigger(popupState)} className="dashboard-button">
                Menu
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>
                  <Link to={"/"} className='primero'>Inicio</Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link to={"/filter/Male"} className='primero'>Hombre</Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link to={"/filter/Female"} className='primero'>Mujer</Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link to="/acerca" className="primero">Acerca de</Link>
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </ul>
    </nav>
  )
}
export default NavBar



