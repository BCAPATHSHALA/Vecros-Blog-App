import {
  MetaData,
  MyContainer,
  VerifyOTP as VerifyOTPC,
} from "../../../components";

const VerifyOTP = () => {
  return (
    <MyContainer>
      <MetaData title={`Reset Password`} />
      <VerifyOTPC /> 
    </MyContainer>
  );
};

export default VerifyOTP;
