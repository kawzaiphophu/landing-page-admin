import React from "react";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//*------------------------------------------------------------------------

const StyledButton = styled(Button)({
  minWidth: "10px",
});

const StyledMenu = styled(Menu)({
  borderRadius: "50%",
  "& .MuiList-padding": {
    paddingBottom: 0,
    paddingTop: 0,
  },
});

const StyledMenuItem = styled(MenuItem)({
  padding: 0,
});

interface DropdownMenuProps {
  id?: number;
  titles: string[] | number[];
  actions: (() => void)[];
  icon?: "menu" | "arrow";
  isDisabled?: boolean[];
  menuIcon?: string[] | any;
}

//*------------------------------------------------------------------------

export default function DropdownMenu({
  id,
  titles,
  actions,
  icon = "menu",
  isDisabled = [],
  menuIcon = [],
}: DropdownMenuProps) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const getIcon = (icon: "menu" | "arrow") => {
    switch (icon) {
      case "arrow":
        return <ExpandMoreIcon sx={{ color: theme.palette.secondary.dark }} />;
      case "menu":
      default:
        return <MoreVertIcon sx={{ color: theme.palette.secondary.dark }} />;
    }
  };

  const selectedIcon = getIcon(icon);

  const handleClick = (event: any) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <Box onClick={(event) => event.stopPropagation()}>
      <PopupState variant="popover" popupId={`menu-popup-${id}`}>
        {(popupState) => (
          <React.Fragment>
            <StyledButton
              {...bindTrigger(popupState)}
              sx={{
                width: "40px",
                height: "40px",
                pointerEvents: "auto",
                borderRadius: "50%",
              }}
              onClick={handleClick}
            >
              {selectedIcon}
            </StyledButton>
            <StyledMenu
              {...bindMenu(popupState)}
              anchorEl={anchorEl}
              onClose={handleClose}
              open={Boolean(anchorEl)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              {titles.map((title, index) => (
                <StyledMenuItem
                  key={index}
                  onClick={(event: any) => {
                    event.stopPropagation(); // Stop event propagation
                    handleClose(event);
                    if (actions[index]) {
                      actions[index]();
                    }
                  }}
                  disabled={isDisabled[index]}
                >
                  <Box
                    display={"flex"}
                    gap={2}
                    sx={{
                      width: "100%",
                      height: "44px",
                      padding: "6px 16px",
                      alignItems: "center",
                      borderBottom: "1px solid #E5E5E5",
                    }}
                  >
                    {icon === "menu" && typeof menuIcon[index] === "string" ? (
                      <img
                        style={{ width: "24px", height: "24px" }}
                        src={menuIcon[index]}
                        alt="menu_icon"
                      />
                    ) : (
                      menuIcon[index]
                    )}
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{
                        color:
                          title === "Delete" || title === "ลบ"
                            ? "red"
                            : "initial",
                      }}
                    >
                      {title}
                    </Typography>
                  </Box>
                </StyledMenuItem>
              ))}
            </StyledMenu>
          </React.Fragment>
        )}
      </PopupState>
    </Box>
  );
}
