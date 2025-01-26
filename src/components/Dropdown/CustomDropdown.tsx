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

interface CustomDropdownProps {
  id?: number;
  titles: string[] | number[];
  actions: (() => void)[];
  icon?: "menu" | "arrow";
  isDisabled?: boolean[];
  menuIcon?: string[] | any;
  label?: string | number;
}

//*------------------------------------------------------------------------

export default function CustomDropdown({
  id,
  titles,
  actions,
  icon = "menu",
  isDisabled = [],
  menuIcon = [],
  label,
}: CustomDropdownProps) {
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
    <Box
      // onClick={(event) => event.stopPropagation()}
      display={"flex"}
      alignItems={"center"}
      sx={{
        border: "1px solid #DEDEDE",
        width: "auto",
        height: "44px",
        justifyContent: "end",
        borderRadius: "8px",
        pl: 2,
        pr:1,
        cursor: "pointer",
        fontWeight:700
      }}
      onClick={handleClick}
    >
      {label && (
        <Typography variant="body2" mr={3} fontWeight={700}>
          {label}
        </Typography>
      )}
      <PopupState variant="popover" popupId={`menu-popup-${id}`}>
        {(popupState) => (
          <React.Fragment>
            <Box display={"flex"} alignItems={'center'}>{selectedIcon}</Box>
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
                  onClick={(event) => {
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
                        style={{ width: "10px", height: "10px" }}
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
