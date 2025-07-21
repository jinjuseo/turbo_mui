import { Avatar } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export function ChipDemo() {
    const onClick = () => {
        alert("onClick")
    }
    const onClickDelete = () => {
        alert("delete")
    }
    return (
        <Stack direction="row" spacing={1}>
            <Chip label="Chip Filled" />
            <Chip label="Chip Outlined" variant="outlined" />
            <Chip label="Clickable" onClick={onClick} />
            <Chip label="Deletable" onDelete={onClickDelete} />
            <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
            <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
            <Chip label="primary" color='primary' />
            <Chip label="secondary" color='secondary' />
        </Stack>
    );
}
