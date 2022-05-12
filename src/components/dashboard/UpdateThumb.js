import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  Input,
  FormLabel,
  Button,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
// import { useSelector } from 'react-redux'
import { editThumb, updateThumb } from "../../services/apiServices";
import AdminNav from "../useableComponent/AdninNav";
import { baseUrl } from "../../services/apis.helper";
import { useForm } from "react-hook-form";

const UpdateThumb = () => {
  // to get the id
  const { id } = useParams();
  // navigate
  const errorNav = useNavigate();

  // to store the data coming from api
  const [editData, setEditData] = useState();
  // to make sure data is loading
  const [loading, setLoading] = useState(true);

  // useRef
  const thumRef = useRef();
  const refBtn = () => {
    thumRef.current.click();
  };
  // react hooks form
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = useForm();

  // to get the data to be update thumb
  const updateApi = async () => {
    let getApi = await editThumb(id);
    if (getApi.type === "error") {
      toast.error(getApi.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
      errorNav("/list_thumb");
    } else {
      setEditData(getApi.data);
      setLoading(false);
      setValue("title", getApi.data.title);
    }
  };
  // console.log(editData)
  useEffect(() => {
    updateApi();
  }, []);

  // to store changed thumbnail
  const [changedThumbnail, setChangedThumbnail] = useState("");
  // changed thumbnail handler
  const fileHandler = (e) => {
    if (e.target.files) {
      setChangedThumbnail(e.target.files[0]);
    }
  };

  //   navigate after update
  const listThumb = useNavigate();
  // now update thumbnail api
  const onSubmit = async (data) => {
    let formData = new FormData();
    formData.append("title", data.title);
    formData.append("thumbnail", changedThumbnail);
    // console.log(data);
    let updateApi = await updateThumb(formData, id);
    if (updateApi.type === "error") {
      toast.error(updateApi.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(updateApi.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      listThumb("/list_thumb");
    }
  };

  return (
    <AdminNav>
      {loading ? (
        "Fetching data !!! "
      ) : (
        <Container
          maxW={"full"}
          mt="0"
          centerContent
          overflow={"hidden"}
          bg={"gray.50"}
        >
          <Flex>
            <Box
              bg={"#02054B"}
              color="white"
              borderRadius={"lg"}
              m={{ sm: 4, md: 16, lg: 10 }}
              p={{ sm: 5, md: 5, lg: 16 }}
            >
              <Heading fontSize={"3xl"} mb="4">
                Edit Thumbnail ?
              </Heading>
              {/* <Box bg="gray.400" borderRadius={"lg"} mt="4"> */}
              <VStack p={2}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormLabel fontWeight="bold" color={"White"}>
                    Title:
                  </FormLabel>
                  <Input
                    type="title"
                    variant={"flushed"}
                    // value={editData.title}
                    {...register("title")}
                  />

                  {/* <FormLabel mt="4">Thumbnail:</FormLabel> */}
                  <Input
                    ref={thumRef}
                    display="none"
                    type={"file"}
                    variant="flushed"
                    onChange={fileHandler}
                  />
                  <Button colorScheme={"whatsapp"} onClick={refBtn} mt="4">
                    Change Thumbnail
                  </Button>
                  <Text fontSize={"2xl"} color="white.500" mt={4} mb="4">
                    Your current thumbnail:
                  </Text>
                  <Center>
                    {changedThumbnail === "" ? (
                      <Image
                        src={`${baseUrl}${editData.thumbnail}`}
                        boxSize="160"
                      />
                    ) : (
                      <Image
                        src={URL.createObjectURL(changedThumbnail)}
                        boxSize="160"
                      />
                    )}
                  </Center>
                  <Button
                    mt="4"
                    variant={"solid"}
                    colorScheme="telegram"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    {" "}
                    Update{" "}
                  </Button>
                </form>
              </VStack>
              {/* </Box> */}
            </Box>
          </Flex>
        </Container>
      )}
    </AdminNav>
  );
};

export default UpdateThumb;
