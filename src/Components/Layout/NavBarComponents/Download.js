import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import './NavBarComponents.css'



export default function Download() {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const closeOrOpen =()=>{
    return open?setOpen(false):setOpen(true)
  }

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
          className="navbar__buttons"
          endIcon = {<CloudDownloadIcon/>}
        >
          Downloads
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} 
                  onMouseLeave = {handleClose}
                  id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem >Newsletters and Reports</MenuItem>
                    <MenuItem >Publications</MenuItem>
                    <MenuItem >TechnicalDocument</MenuItem>
                    <MenuItem >OtherResources</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

      </div>
  );
}
