import { styled, alpha } from '@mui/material/styles';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

export const styledCardContent = styled(CardContent) ({

    display: 'flex',
    justifyContent: 'space-between',

});

export const styledCardMedia = styled(CardMedia) ({

    height: 260,
});

export const styledCardActions = styled(CardActions) ({

    justifyContent: 'space-between',
});