import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Center,
  Box,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateCurrentUser } from "../../../app/actions/userAction";
import { clearError, clearMessage } from "../../../app/reducers/userSlice";

const UpdateProfile = () => {
  const { message, error, loading, userData } = useSelector(
    (state) => state.user
  );
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullName: userData?.fullName,
      email: userData?.email,
      username: userData?.username,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, username, fullName } = data;
    dispatch(updateCurrentUser(email, username, fullName));
  };

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    if (message) {
      dispatch(clearMessage());
      navigate("/profile/update");
    }
  }, [dispatch, error, message, navigate]);

  return (
    <Center minH={"100vh"}>
      <Box p={8} rounded="lg" shadow="md">
        <Heading mb={6} textAlign="center" fontSize={"1.5rem"}>
          Update Current Profile
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <HStack flexWrap={"wrap"}>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  focusBorderColor="purple.300"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />
                {errors.fullName && (
                  <Text color="red.500">{errors.fullName.message}</Text>
                )}
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  focusBorderColor="purple.300"
                  type="text"
                  placeholder="Enter your username"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username && (
                  <Text color="red.500">{errors.username.message}</Text>
                )}
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  focusBorderColor="purple.300"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <Text color="red.500">{errors.email.message}</Text>
                )}
              </FormControl>
            </HStack>
            <Button type="submit" colorScheme="purple" isLoading={loading}>
              Update Profile
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default UpdateProfile;
