import React , {useEffect, useState}from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import './NavBarComponents.css'



export default function ResearchComponent() {
  //const [show, handleShow] = useState(false)
  useEffect(() => {
      // window.addEventListener("scroll", () => {
      //     if (window.scrollY > 100) {
      //         handleShow(true)
      //     }
      //     else {
      //         handleShow(false)
      //     }
      // })
      // return ()=> window.removeEventListener('scroll')
      
  }, [])

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const closeOrOpen = ()=>{
    return open?setOpen(false):setOpen(true)
  }

  return (
      <div>
          <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={closeOrOpen}
          onMouseMove = {()=>setOpen(true)}
          onMouseLeave = {open?null:()=>setOpen(false)}
    
          onMouseOut = {anchorRef?null:handleToggle}
          disableRipple = {true}
          className = "navbar__buttons"
          endIcon = {<ArrowDropDownCircleIcon
          
          />}
        >
          ResearchComponent
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" 
                  onMouseLeave = {handleClose}
                  onKeyDown={handleListKeyDown}>
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

      </div>
  );
}
