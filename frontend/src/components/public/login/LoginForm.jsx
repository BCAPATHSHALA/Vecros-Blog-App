import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../app/actions/userAction.js";
import {
  clearAccessToken,
  clearError,
  clearMessage,
  setAccessToken,
} from "../../../app/reducers/userSlice.js";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error, loading, accessToken, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const { email, password, username } = data;
    dispatch(login(email, password, username));
  };

  useEffect(() => {
    if (error) {
      dispatch(clearError());
      dispatch(clearAccessToken());
    }
    if (message) {
      dispatch(clearMessage());
      dispatch(setAccessToken(accessToken));
      navigate("/profile");
    }
  }, [dispatch, error, message, navigate, accessToken]);

  useEffect(() => {
    if (isAuthenticated && accessToken) {
      navigate("/profile");
    } else if (message === "OTP has been sent to your registered email." && !isAuthenticated) {
      navigate("/verify-otp");
    }
  }, [accessToken, navigate, isAuthenticated, message]);

  return (
    <Center minH={{ base: "73vh", md: "70vh" }}>
      <Box
        p={4}
        rounded="lg"
        shadow="md"
        w={{ base: "90%", sm: "80%", md: "50%" }}
      >
        <Heading mb={6} textAlign="center" fontSize={"1.5rem"}>
          Welcome to Vecros
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
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
                    message: "Email address must be a valid address",
                  },
                })}
              />
              {errors.email && (
                <Text color="red.500">{errors.email.message}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                focusBorderColor="purple.300"
                type="text"
                placeholder="Enter your username"
                {...register("username", { required: false })}
              />
              {errors.username && (
                <Text color="red.500">{errors.username.message}</Text>
              )}
            </FormControl>
            <FormControl isRequired>
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
            <Button type="submit" colorScheme="purple" isLoading={loading}>
              Login
            </Button>
            <Box textAlign="center" mt={3}>
              <span>
                {`If you don't have an account?`}{" "}
                <Link to="/signup">Sign Up</Link>
              </span>
            </Box>
            <Box textAlign="center" mt={1}>
              <span>
                <Link to="/forgot-password">Forgotten Password?</Link>
              </span>
            </Box>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default LoginForm;
