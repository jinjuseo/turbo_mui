import { Box, FormControlLabel, FormGroup } from '@mui/material';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export function SwitchDemo() {
    return (
        <Box>
            <Switch {...label} defaultChecked />
            <Switch {...label} />
            <Switch {...label} disabled defaultChecked />
            <Switch {...label} disabled />
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                <FormControlLabel required control={<Switch color='secondary' />} label="Required" />
                <FormControlLabel disabled defaultChecked control={<Switch color='warning' />} label="Disabled" />
                <FormControlLabel disabled control={<Switch color='warning' />} label="Disabled" />
            </FormGroup>
        </Box>
    );
}
