import { Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const { isAuthenticated, userData } = useSelector((state) => state.user);

  useEffect(() => {
    if (authentication && isAuthenticated !== authentication) {
      navigate("/login");
    } else if (!authentication && isAuthenticated !== authentication) {
      navigate("/profile");
    }
    if (
      !authentication &&
      isAuthenticated !== authentication &&
      userData &&
      userData.role === "ADMIN"
    ) {
      navigate("/dashboard");
    }
    setLoader(false);
  }, [isAuthenticated, navigate, authentication, userData]);

  return loader ? (
    <Center>
      <Spinner size={"xl"} />
    </Center>
  ) : (
    <>{children}</>
  );
};

export default AuthLayout;
