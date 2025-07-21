import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Fragment, useState } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { it as data } from 'node:test';

const DATA = [
    { userName: '길동', age: 10 },
    { userName: '길동', age: 10 },
    { userName: '길동', age: 10 },
    { userName: '길동', age: 10 },
    { userName: '길동', age: 10 },
    { userName: '길동', age: 10 },
    { userName: '길동', age: 10 },
    { userName: '길동', age: 10 },
].map((it, index) => ({ ...it, id: index }))

export default function GridDemo() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '> *': {
                    ml: 1,
                    mt: 1,
                }
            }}>
                {DATA.map(data => <SampleCard key={data.id} userName={data.userName} age={data.age} />)}
            </Box>

            <Divider sx={{ my: 5 }} />
            <Grid container columns={12} rowSpacing={1} columnSpacing={1}>

                {DATA.map(data =>
                    <Grid key={data.id} size={{ xs: 12, md: 6, lg: 4 }}>
                        <SampleCard userName={data.userName} age={data.age} />
                    </Grid>
                )}

            </Grid>
        </Box>
    );
}

function SampleCard(props: { userName: string, age: number }) {
    const { age, userName } = props
    return <Box
        sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            border: '1px solid #ddd',
            p: 3,
            minWidth: 300,
        }}>
        <Typography>{userName}</Typography>
        <Typography>{age}살</Typography>

    </Box>
}