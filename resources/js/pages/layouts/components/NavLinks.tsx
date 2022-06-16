import { Button, Flex, Tooltip } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { BiBookOpen, BiGroup, BiHomeSmile } from "react-icons/bi";

const NavLinks = () => {
  const currentLocation = useLocation();

  return (
    <Flex
      gap="20px"
      width="container.md"
      alignItems="center"
      justifyContent="center"
    >
      <Tooltip label="Dashboard">
        <Link to="/dashboard">
          <Button
            fontWeight="normal"
            variant="ghost"
            isActive={currentLocation.pathname === "/dashboard"}
          >
            <BiHomeSmile fontSize="26px" />
          </Button>
        </Link>
      </Tooltip>
      <Tooltip label="Follows">
        <Link to="/follows">
          <Button
            fontWeight="normal"
            variant="ghost"
            isActive={currentLocation.pathname === "/follows"}
          >
            <BiGroup fontSize="26px" />
          </Button>
        </Link>
      </Tooltip>
      <Tooltip label="Lessons">
        <Link to="/lessons">
          <Button
            fontWeight="normal"
            variant="ghost"
            isActive={currentLocation.pathname === "/lessons"}
          >
            <BiBookOpen fontSize="26px" />
          </Button>
        </Link>
      </Tooltip>
    </Flex>
  );
};

export default NavLinks;
