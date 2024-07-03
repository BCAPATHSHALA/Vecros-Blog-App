import { useEffect, useState } from "react";
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
  Flex,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../app/actions/userAction";
import { clearError, clearMessage } from "../../../app/reducers/userSlice";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error, loading } = useSelector((state) => state.user);

  const onSubmit = (data) => {
    const { fullName, email, username, password, confirmPassword } = data;
    dispatch(
      registerUser(fullName, email, username, password, confirmPassword)
    );
  };

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    if (message) {
      dispatch(clearMessage());
      navigate("/verify-otp");
    }
  }, [dispatch, error, message, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Center minH="75vh">
      <Box
        p={4}
        rounded="lg"
        shadow="md"
        w={{ base: "90%", sm: "80%", md: "50%" }}
      >
        <Heading mb={6} textAlign="center" fontSize={"1.5rem"}>
          Create Vecros Account
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
                <FormLabel>Full Name</FormLabel>
                <Input
                  focusBorderColor="purple.300"
                  type="text"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                />
                {errors.fullName && (
                  <Text color="red.500">{errors.fullName.message}</Text>
                )}
              </FormControl>
              <FormControl isRequired ml={{ md: 2 }} flex={1}>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  focusBorderColor="purple.300"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username && (
                  <Text color="red.500">{errors.username.message}</Text>
                )}
              </FormControl>
            </Flex>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                focusBorderColor="purple.300"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Email address must be a valid address",
                  },
                })}
              />
              {errors.email && (
                <Text color="red.500">{errors.email.message}</Text>
              )}
            </FormControl>
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
              Register
            </Button>
            <Box mt={4} textAlign="center">
              Already have an account?{" "}
              <Link to="/login" color="blue.500">
                Login
              </Link>
            </Box>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default SignupForm;
