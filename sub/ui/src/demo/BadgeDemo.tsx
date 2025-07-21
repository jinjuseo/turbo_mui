import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, Stack } from '@mui/material';
function notificationsLabel(count: number) {
    if (count === 0) {
        return 'no notifications';
    }
    if (count > 99) {
        return 'more than 99 notifications';
    }
    return `${count} notifications`;
}
export function BadgeDemo() {
    return (
        <Stack spacing={2} direction={"row"}>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge>
            <Badge color="secondary" badgeContent={1000} max={999}>
                <MailIcon />
            </Badge>
            <Badge color="secondary" variant="dot">
                <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="primary" anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}>
                <MailIcon color="action" />
            </Badge>
            <IconButton aria-label={notificationsLabel(100)}>
                <Badge badgeContent={100} color="secondary">
                    <MailIcon />
                </Badge>
            </IconButton>
        </Stack>

    );
}
