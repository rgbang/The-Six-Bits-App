import { styled } from '@mui/material/styles';


export const styledMain = styled('main')(({ theme }) => ({

    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),

}));
