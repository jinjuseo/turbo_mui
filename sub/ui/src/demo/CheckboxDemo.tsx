'use client';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import { ChangeEvent, useState } from 'react';

export function CheckboxDemo() {
    const [checked, setChecked] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setChecked(prev => !prev);
        alert(`${e.target.id}값이 ${value}로 바뀌었습니다.`)
    }

    return (
        <Box>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel required control={<Checkbox color='secondary' />} label="Required" />
                <FormControlLabel disabled control={<Checkbox />} label="Disbled" />
                <FormControlLabel disabled checked control={<Checkbox />} label="DisbledChecked" />
            </FormGroup>
            <Checkbox defaultChecked />
            <Checkbox value={checked} id="checkbox" onChange={onChange} />
            <Checkbox disabled />
            <Checkbox disabled checked />
        </Box>


    );
}
