import { AvatarGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';




export function AvatarDemo() {
    return (
        <AvatarGroup total={4} max={3} >
            <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar sx={{ bgcolor: deepPurple[500] }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar sx={{ bgcolor: deepPurple[500] }} alt="Cindy Baker2" src="/static/images/avatar/3.jpg" />
        </AvatarGroup >

    );
}
