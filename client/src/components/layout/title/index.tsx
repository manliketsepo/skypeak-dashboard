import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import { Button } from "@mui/material";

import { logo, skypeak } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logo} alt="Skypeak" width="28px" />
                ) : (
                    <img src={skypeak} alt="Skypeak" width="140px" />
                )}
            </Link>
        </Button>
    );
};
