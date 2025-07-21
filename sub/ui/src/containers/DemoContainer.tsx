'use client'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AlertDemo, AvatarDemo, BadgeDemo, ButtonGroupDemo, ButtonsDemo, CheckboxDemo, ChipDemo, DialogDemo, DividerDemo, FloatingActionButtonDemo, ListDemo, ProgressDemo, RadioGroupDemo, RatingDemo, SelectDemo, SliderDemo, SwitchDemo, TextFieldDemo, ToggleButtonDemo, TooltipDemo, TransferListDemo, TypographyDemo } from '../demo';
import { CustomButton } from '../components/CustomButton';
import { useState } from 'react';
import SkeletonDemo from '../demo/SkeletonDemo';
import SnackbarDemo from '../demo/SnackbarDemo';
import GridDemo from '../demo/GridDemo';

const TABS = {
    ButtonsDemo: { label: '버튼 데모', comp: ButtonsDemo },
    ButtonGroupDemo: { label: '버튼 그룹 데모', comp: ButtonGroupDemo },
    CheckboxDemo: { label: '체크박스 데모', comp: CheckboxDemo },
    FloatingActionButtonDemo: { label: 'FAB 데모', comp: FloatingActionButtonDemo },
    RadioGroupDemo: { label: '라디오 그룹 데모', comp: RadioGroupDemo },
    RatingDemo: { label: '별점 데모', comp: RatingDemo },
    SelectDemo: { label: '셀렉트 데모', comp: SelectDemo },
    SliderDemo: { label: '슬라이더 데모', comp: SliderDemo },
    SwitchDemo: { label: '스위치 데모', comp: SwitchDemo },
    TextFieldDemo: { label: '텍스트 필드 데모', comp: TextFieldDemo },
    ToggleButtonDemo: { label: '토글 버튼 데모', comp: ToggleButtonDemo },
    TransferListDemo: { label: 'Transfer List 데모', comp: TransferListDemo },
    AvatarDemo: { label: '아바타 데모', comp: AvatarDemo },
    BadgeDemo: { label: '뱃지 데모', comp: BadgeDemo },
    ChipDemo: { label: '칩 데모', comp: ChipDemo },
    DividerDemo: { label: '구분선 데모', comp: DividerDemo },
    ListDemo: { label: '리스트 데모', comp: ListDemo },
    TooltipDemo: { label: '툴팁 데모', comp: TooltipDemo },
    TypographyDemo: { label: '타이포그래피 데모', comp: TypographyDemo },
    AlertDemo: { label: 'Alert 데모', comp: AlertDemo },
    DialogDemo: { label: 'Dialog 데모', comp: DialogDemo },
    ProgressDemo: { label: 'Progress 데모', comp: ProgressDemo },
    SkeletonDemo: { label: 'Skeleton 데모', comp: SkeletonDemo },
    SnackbarDemo: { label: 'Skeleton 데모', comp: SnackbarDemo },
    GridDemo: { label: 'Grid 데모', comp: GridDemo },
} as const


type TabKey = keyof typeof TABS


export function DemoContainer() {
    const [tab, setTab] = useState<TabKey>('ButtonsDemo');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue as TabKey);
    };

    const Comp = TABS[tab]?.comp

    return <Box>
        <Box sx={{ width: '100vw', minHeight: '100vh', bgcolor: 'background.paper', display: 'flex', flexDirection: 'row', overflowX: "auto" }}>
            <Tabs value={tab} onChange={handleChange} orientation='vertical' sx={{ overflowX: "auto" }}>
                {Object.entries(TABS).map(([key, item]) => <Tab key={key} label={item.label}
                    value={key}
                />)}
            </Tabs>
            <Box sx={{ overflowY: 'auto', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {Comp && <Comp />}
            </Box>
        </Box>
        {/* <CustomButton  >Hello1</CustomButton>
        <CustomButton
            sx={{ fontSize: '3rem', color: 'green' }}
            style={{
                color: 'blue'
            }}
            variant='contained'
        >Hello2</CustomButton> */}
    </Box >
}