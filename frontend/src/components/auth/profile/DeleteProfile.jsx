import { Button, VStack, Text, HStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCurrentUser } from "../../../app/actions/userAction";
import { clearError, clearMessage } from "../../../app/reducers/userSlice";

const DeleteProfile = ({ onClose }) => {
  const dispatch = useDispatch();
  const { message, error, loading, userData } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  const handleConfirmDelete = () => {
    dispatch(deleteCurrentUser());
  };

  useEffect(() => {
    if (error) {
      dispatch(clearError());
      onClose();
    }
    if (message) {
      dispatch(clearMessage());
      navigate("/signup");
    }
  }, [dispatch, error, message, onClose, navigate]);

  return (
    <VStack spacing={4}>
      <Text
        textAlign={"center"}
        fontWeight={"500"}
        letterSpacing={1}
        textTransform={"uppercase"}
      >
        {userData?.username}
      </Text>
      <HStack justifyContent={"center"}>
        <Button
          isLoading={loading}
          colorScheme="red"
          onClick={handleConfirmDelete}
        >
          Yes
        </Button>
        <Button onClick={onClose}>No</Button>
      </HStack>
    </VStack>
  );
};

export default DeleteProfile;
