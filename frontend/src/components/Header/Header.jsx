import { Link, Heading, HStack, Text, VStack, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { PiCodeBold } from "react-icons/pi";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const routes = [
    { path: "/", label: "Home", active: true },
    { path: "/blogs", label: "Blogs", active: true },
    { path: "/login", label: "Login", active: !isAuthenticated },
    { path: "/tools", label: "Tools", active: true },
  ];
  return (
    <Flex
      p={5}
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      width="100%"
    >
      <HStack bg="purple.500" mb={{ base: 4, md: 0 }} borderRadius="10" px={2}>
        <PiCodeBold size={"3rem"} />
        <VStack p={3} spacing={0}>
          <Heading size="md">Console Busters</Heading>
          <Text fontSize="sm">Blog Application</Text>
        </VStack>
      </HStack>
      <HStack spacing={4}>
        {routes.map(
          (route) =>
            route.active && (
              <Link
                key={route.label}
                as={NavLink}
                to={route.path}
                marginRight={{ base: "0", md: "2" }}
                _activeLink={{ color: "#805AD5" }}
              >
                {route.label}
              </Link>
            )
        )}
        {isAuthenticated && (
          <Link
            as={NavLink}
            to="/profile"
            marginRight={{ base: "0", md: "2" }}
            _activeLink={{ color: "#1d3557" }}
          >
            Profile
          </Link>
        )}
      </HStack>
    </Flex>
  );
};

export default Header;
