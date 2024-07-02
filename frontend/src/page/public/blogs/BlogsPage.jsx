import { Blogs, MetaData, MyContainer } from "../../../components";

const BlogsPage = () => {
  return (
    <MyContainer minH={"100vh"}>
      <MetaData title={`Vecros Blogs`} />
      <Blogs />
    </MyContainer>
  );
};

export default BlogsPage;
