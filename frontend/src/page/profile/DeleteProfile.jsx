import { useState } from "react";
import {
  MyContainer,
  DeleteProfile as DeleteProfileC,
  CustomModal,
} from "../../components";
import { Button, Heading, Text, VStack, Center } from "@chakra-ui/react";

const DeleteProfile = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <MyContainer>
      <Center minH="100vh">
        <VStack maxW={"2xl"} spacing={4}>
          <Heading color={""}>Warning</Heading>
          <Text textAlign={"center"}>
            Once you delete your profile, all your data will be permanently
            removed and cannot be recovered.
          </Text>
          <Button colorScheme="red" onClick={handleDelete}>
            Delete Profile
          </Button>
        </VStack>
      </Center>

      {/* Modal for delete */}
      <CustomModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Profile Permanently"
      >
        <DeleteProfileC onClose={() => setIsDeleteModalOpen(false)} />
      </CustomModal>
    </MyContainer>
  );
};

export default DeleteProfile;
