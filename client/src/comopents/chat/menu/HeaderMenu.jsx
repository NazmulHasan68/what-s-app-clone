import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function HeaderMenu() {
    const [open ,setOpen] = useState(null)
    
    const handleClick = (e) => {
     setOpen(e.currentTarget)
    };
    const handleClose = () => {
        setOpen(null)
    };
  return (
    <div>
      <MoreVertIcon 
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorEl={open}
        anchorOrigin={{
            vertical : 'bottom',
            horizontal:"center"
        }}
        transformOrigin={{
            vertical : 'top',
            horizontal : 'right'
        }}
      >
        <MenuItem onClick={handleClose} className='text-sm'>Profile</MenuItem>
        <MenuItem onClick={handleClose} className='text-sm'>My account</MenuItem>
        <MenuItem onClick={handleClose} className='text-sm'>Logout</MenuItem>
      </Menu>
    </div>
  )
}
