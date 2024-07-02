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
  Text,
  Flex,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { resetPassword } from "../../../app/actions/userAction";
import { clearError, clearMessage } from "../../../app/reducers/userSlice";

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { message, error, loading } = useSelector((state) => state.user);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Extracting token from URL params
  const resetToken = params?.resetToken;

  const onSubmit = (data) => {
    const { password, confirmPassword } = data;
    dispatch(resetPassword(password, confirmPassword, resetToken));
  };

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
    <Center minH={{ base: "70vh", md: "75vh" }}>
      <Box
        p={8}
        rounded="lg"
        shadow="md"
        w={{ base: "90%", sm: "80%", md: "50%" }}
      >
        <Heading mb={6} textAlign="center" fontSize={"1.5rem"}>
          Reset Password
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <Flex direction={{ base: "column", md: "row" }}>
              <FormControl
                isRequired
                mb={{ base: 4, md: 0 }}
                mr={{ md: 2 }}
                flex={1}
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    focusBorderColor="purple.300"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <Text color="red.500">{errors.password.message}</Text>
                )}
              </FormControl>
              <FormControl isRequired ml={{ md: 2 }} flex={1}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  focusBorderColor="purple.300"
                  type="password"
                  placeholder="Enter confirm password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <Text color="red.500">{errors.confirmPassword.message}</Text>
                )}
              </FormControl>
            </Flex>
            <Button type="submit" colorScheme="purple" isLoading={loading}>
              Reset Password
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default ResetPasswordForm;
