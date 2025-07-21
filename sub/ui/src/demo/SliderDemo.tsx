import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useState } from 'react';

export function SliderDemo() {
    const [value, setValue] = useState<number>(30);
    const [rangeValue, setRangeValue] = useState<number[]>([20, 37]);

    const onChange = (event: Event, newValue: number) => {
        setValue(newValue);
    };
    const onChangeRangeValue = (event: Event, newValue: number[]) => {
        setRangeValue(newValue);
    };

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
                <VolumeDown />
                <Slider aria-label="Volume" value={value} onChange={onChange} />
                <VolumeUp />
            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={rangeValue}
                onChange={onChangeRangeValue}
                valueLabelDisplay="auto"
            />
        </Box>
    );
}

