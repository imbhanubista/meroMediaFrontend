import {
  Box,
  Image,
  SimpleGrid,
  Heading,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import logo from "../../images/createthumbn.svg";
import { useForm } from "react-hook-form";
import Footer from "../useableComponent/Footer";
import { createThumbnail } from "../../services/apiServices";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminNav from "../useableComponent/AdninNav";

const ThumbnailCreate = () => {
  // selector to get data
  const selector = useSelector((state) => state.reducer);
  console.log(selector);
  // ref for file upload
  const uploadRef = useRef();
  const uploaderHandler = () => {
    uploadRef.current.click();
  };
  // to store the image
  const [imageStore, setImageStore] = useState("");
  // to get value of files
  let handleUpload = (e) => {
    if (e.target.files) {
      setImageStore(e.target.files[0]);
    }
  };
  // for navigation
  const homeNav = useNavigate();
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    //  console.log(data,"datax here");
    // let formData = new FormData();
    // formData.append("title", data.title)
    // console.log(imageStore,"heelllo")
    // formData.append("thumbnail", imageStore)
    // console.log(formData,"formdatax")
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("thumbnail", imageStore);
    let response = await createThumbnail(formData);
    if (response.type === "error") {
      toast.error(response.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(response.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      homeNav("/home");
    }
  };
  return (
    <AdminNav>
      <SimpleGrid>
        <Box m="auto">
          <Heading mb={4}>Create Thumbnail</Heading>
          <Image src={logo} alt="Create Thumbnail" boxSize={60} />
        </Box>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Enter your title here!"
              textAlign={"center"}
              variant="filled"
              width={"60"}
              mb="4"
              {...register("title")}
            />
            <br />
            <Input
              type={"file"}
              ref={uploadRef}
              display="none"
              onChange={handleUpload}
            />
            <Button onClick={uploaderHandler}> Upload Thumbnail </Button>
            {imageStore === "" ? (
              ""
            ) : (
              <Center>
                <Image
                  src={URL.createObjectURL(imageStore)}
                  boxSize="160"
                  borderRadius={80}
                  mt="4"
                />
              </Center>
            )}
            <br />
            <Button
              type="submit"
              colorScheme={"twitter"}
              mt="4"
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </form>
        </Box>
      </SimpleGrid>
      <Footer />
    </AdminNav>
  );
};

export default ThumbnailCreate;
