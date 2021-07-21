import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1,
        }
    },
    headerOptions: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-evenly",
    }
}));

const Navbar = props => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const handleChange = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageURL) => {
        history.push(pageURL)
        setAnchorEl(null);
    };

    const handleButtonClick = (pageURL) => {
        history.push(pageURL)
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Photos
                    </Typography>
                        {
                            isMobile ? (
                                <>
                                    <IconButton
                                        edge="start"
                                        className={classes.menuButton}
                                        color="inherit"
                                        aria-label="menu"
                                        onClick={handleMenu}
                                    >
                                        <MenuIcon />
                                    </IconButton>

                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={() => setAnchorEl(null)}
                                    >
                                        <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                                        <MenuItem onClick={() => handleMenuClick('/login')}>Contact</MenuItem>
                                        <MenuItem onClick={() => handleMenuClick('/')}>About</MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                    <div className={classes.headerOptions}>
                                        <Button variant="contained" onClick={() => handleButtonClick('/')}>HOME</Button>
                                        <Button variant="contained" onClick={() => handleButtonClick('/login')}>HOME</Button>
                                        <Button variant="contained" onClick={() => handleButtonClick('/')}>HOME</Button>
                                    </div>
                                )

                        }

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Navbar);