import { Button, ButtonProps, SxProps } from "@mui/material";
import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
    sx?: SxProps
    className?: string
    style?: React.CSSProperties
    children?: ReactNode
} & ButtonProps


export function CustomButton(props: Props) {
    const { sx, className, style, children, ...restProps } = props
    return <Button
        className={clsx("CustomButton-root", className)}
        size="large"
        sx={[
            {
                fontSize: '2rem',
                color: 'red'
            },
            ...(Array.isArray(sx) ? sx : [sx ?? false]),
        ]}
        style={style}
        {...restProps}
    >{children}</Button>
}

