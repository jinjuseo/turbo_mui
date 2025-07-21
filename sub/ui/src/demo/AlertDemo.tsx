import Alert from '@mui/material/Alert';
import { Stack } from '@mui/material';

export function AlertDemo() {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            {/* <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
  Here is a gentle confirmation that your action was successful.
</Alert> */}
            <Alert severity="success">This is a success Alert.</Alert>
            <Alert severity="info">This is an info Alert.</Alert>
            <Alert severity="warning">This is a warning Alert.</Alert>
            <Alert severity="error">This is an error Alert.</Alert>
            <Alert variant="filled" severity="success">This is a success Alert.</Alert>
            <Alert variant="filled" severity="info">This is an info Alert.</Alert>
            <Alert variant="filled" severity="warning">This is a warning Alert.</Alert>
            <Alert variant="filled" severity="error">This is an error Alert.</Alert>
            <Alert variant="outlined" severity="success">This is a success Alert.</Alert>
            <Alert variant="outlined" severity="info">This is an info Alert.</Alert>
            <Alert variant="outlined" severity="warning">This is a warning Alert.</Alert>
            <Alert variant="outlined" severity="error">This is an error Alert.</Alert>
        </Stack>
    );
}
