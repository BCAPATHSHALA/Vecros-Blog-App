import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { LogoutButton, MetaData, MyContainer } from "../../components";
import { MdDelete, MdEdit, MdAdd, MdList } from "react-icons/md";

const profileBTNs = [
  {
    path: "/profile/update",
    label: "Update",
    icon: <MdEdit />,
  },
  {
    path: "/profile/delete",
    label: "Delete",
    icon: <MdDelete />,
  },
  {
    path: "/profile/blogs/list",
    label: "Fetch Blog",
    icon: <MdList />,
  },
  {
    path: "/profile/blogs/create",
    label: "Create Blog",
    icon: <MdAdd />,
  },
];

const Profile = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <Box display={"flex"} minHeight={"100vh"}>
      <MetaData title={userData && userData?.username} />
      <MyContainer
        p="0"
        bg="yellow.500"
        maxW={{ base: "full", md: "full", lg: "7xl" }}
      >
        <HStack
          bg={"#0D1B2A"}
          w={"100%"}
          h={"100%"}
          gap={0}
          flexDir={{ base: "column", md: "row" }}
        >
          {/* Side Bar */}
          <VStack
            flex={{ base: "fit-content", md: 1 }}
            h={"100%"}
            width={{ base: "100%" }}
          >
            <Image
              src="https://t4.ftcdn.net/jpg/01/24/65/69/360_F_124656969_x3y8YVzvrqFZyv3YLWNo6PJaC88SYxqM.jpg"
              borderRadius={"full"}
              w={"70"}
              h={"70"}
              border={"5px solid gray"}
              mt={10}
            />
            {userData && (
              <VStack>
                <Text
                  textTransform={"uppercase"}
                >{`${userData?.fullName}`}</Text>
              </VStack>
            )}
            <VStack>
              <Box
                display={"flex"}
                flexDir={{ base: "row", md: "column" }}
                flexWrap={"wrap"}
                gap={"5"}
                p={2}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {profileBTNs.map((btn) => (
                  <Link key={btn.icon} to={btn.path}>
                    <Button
                      width={{ base: "150px", md: "full" }}
                      leftIcon={btn.icon}
                    >
                      {btn.label}
                    </Button>
                  </Link>
                ))}
                {/* Logout Button */}
                <Link>
                  <LogoutButton p="5" width={{ base: "150px", md: "full" }} />
                </Link>
              </Box>
            </VStack>
          </VStack>
          {/* Outlet Content */}
          <VStack
            flex={{ base: "full", md: 4 }}
            bg={"gray.700"}
            h={"100%"}
            width={{ base: "100%" }}
          >
            <main>
              <Outlet />
            </main>
          </VStack>
        </HStack>
      </MyContainer>
    </Box>
  );
};

export default Profile;
