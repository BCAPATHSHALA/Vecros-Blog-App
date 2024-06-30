import { Button, HStack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { logout } from "../../../app/actions/userAction";
import { clearError, clearMessage } from "../../../app/reducers/userSlice";

const LogoutButton = ({ ...rest }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const { message, error, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    if (message) {
      dispatch(clearMessage());
      navigate("/login");
    }
  }, [dispatch, error, message, navigate]);

  return (
    <Button
      onClick={logoutHandler}
      colorScheme="red"
      flex={1}
      isLoading={loading}
      {...rest}
    >
      <HStack>
        <FiLogOut />
        <Text>Logout</Text>
      </HStack>
    </Button>
  );
};

export default LogoutButton;
