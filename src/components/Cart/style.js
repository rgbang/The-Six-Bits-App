import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@mui/material';


const drawerWidth = 0;

export const emptyButton = styled(Button)(({ theme }) => ({

    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },

}));
export const styledDiv = styled(div) ({

    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
});

export const styledTypography = styled(Typography) ({

    marginTop: '5%',
});

export const checkoutButton = styled(Button) ({

    minWidth: '150px',
});
