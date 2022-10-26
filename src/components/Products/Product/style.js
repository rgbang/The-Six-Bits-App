import { styled } from '@mui/material/styles';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';

export const styledCard = styled(Card) ({

    height: 0,
    paddingTop: '56.25%', // 16:9

});

export const styledCardMedia = styled(CardMedia) ({

    display: 'flex',
    justifyContent: 'flex-end',
});

export const styledDiv = styled('div') ({
    display: 'flex',
    justifyContent: 'space-between',

});



