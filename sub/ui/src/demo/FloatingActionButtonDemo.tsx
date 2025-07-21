import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export function FloatingActionButtonDemo() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add" size='small'>
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit" size='small'>
                <EditIcon />
            </Fab>
            <Fab variant="extended" aria-label="navigate" size='medium'>
                <NavigationIcon sx={{ mr: 1 }} />
                Navigate
            </Fab>
            <Fab aria-label="like" size='small'>
                <FavoriteIcon sx={{ color: "#FF0000" }} />
            </Fab>
        </Box>
    );
}
