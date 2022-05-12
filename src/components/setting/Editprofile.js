import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AdminNav from "../useableComponent/AdninNav";
import { useForm } from "react-hook-form";
import { editProfile, updateProfile } from "../../services/apiServices";
import { toast } from "react-toastify";
import { baseUrl } from "../../services/apis.helper";
import { useSelector } from "react-redux";
import Navbar from "../useableComponent/Navbar";
const Editprofile = () => {
  const navigateRoute = useNavigate();
  // Reference input
  const profileRef = useRef();
  // data to store profile change
  const [profileStore, setProfileStore] = useState("");
  // button
  const handleRef = (e) => {
    profileRef.current.click();
  };
  // button to change profile
  const handleProfile = (e) => {
    if (e.target.files) {
      setProfileStore(e.target.files[0]);
    }
  };
  // }
  // useform
  const {
    register,
    handleSubmit,
    formState: { onSubmitting },
    setValue,
  } = useForm();
  // state to save data coming from edit api
  const [editingData, setEditingData] = useState("");
  // make sure data is loading
  const [loading, setLoading] = useState(true);

  const selector = useSelector((state) => state.reducer);

  // to get user data
  const editProfileApi = async () => {
    let editApi = await editProfile();
    if (editApi.type === "error") {
      alert("Error while editing profile");
    } else {
      // setProfileStore(editApi.data.profile)
      setEditingData(editApi.data);
      setValue("name", editApi.data.name);
      setValue("bio", editApi.data.bio);
      // setValue("profile", editApi.data.profile)
      setLoading(false);
    }

    console.log(editApi.data);
  };

  const onSubmit = async (data) => {
    let getUpdateProfileData = await updateProfile(data);
    if (getUpdateProfileData.error) {
      toast.error(getUpdateProfileData.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(getUpdateProfileData.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigateRoute("/home");
    }
  };

  useEffect(() => {
    editProfileApi();
  }, []);

  return (
    <>
      {selector.isAdmin === true ? (
        <AdminNav>
          <Box flex={1} bg={"white"}>
            <Box>
              <Heading color={"#257275"} textAlign="left" ml={"4"}>
                EDIT INFORMATION
              </Heading>
            </Box>
            {/* <Box bg="white" borderRadius="lg" width={"2xl"} margin="auto"> */}
            <Box
              m={2}
              color="#0B0E3F"
              p="6"
              boxShadow={"lg"}
              width="2xl"
              borderRadius="2xl"
              bg={"white.100"}
            >
              <Text textAlign="left" fontSize={"2xl"} fontWeight="bold" mb={4}>
                Account Info:
              </Text>

              {loading ? (
                <></>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <VStack spacing={4}>
                    <FormControl>
                      <FormLabel>Full Name:</FormLabel>
                      <Input
                        variant={"outline"}
                        size="md"
                        type={"text"}
                        {...register("name")}
                      />
                    </FormControl>
                    {/* <FormControl>
         <FormLabel>Email:</FormLabel>
         <Input variant={"outline"} size="md" type={"text"} {...register("")} />
       </FormControl> */}
                    {/* <FormControl>
         <FormLabel>Username:</FormLabel>
         <Input variant={"outline"} size="md" type={"text"} />
       </FormControl> */}
                    {/* <FormControl>
         <FormLabel>Phone:</FormLabel>
         <Input variant={"outline"} size="md" type={"tel"} />
       </FormControl> */}
                    <FormControl>
                      <FormLabel>Bio:</FormLabel>
                      <Textarea
                        variant={"outline"}
                        type="text"
                        {...register("bio")}
                      />
                    </FormControl>

                    <FormControl>
                      {/* <FormLabel>Profile:</FormLabel> */}
                      <Input
                        display={"none"}
                        ref={profileRef}
                        type={"file"}
                        onChange={handleProfile}
                      />
                    </FormControl>

                    <Button onClick={handleRef}>Upload Profile</Button>
                    <Text>Your profile picture</Text>
                    {profileStore === "" ? (
                      <Image
                        src={`${baseUrl}${editingData.profile}`}
                        alt="Newly added Profile Picture"
                        boxSize={"160"}
                        borderRadius="lg"
                      />
                    ) : (
                      <Image
                        src={URL.createObjectURL(profileStore)}
                        alt="Your Profile"
                        boxSize={"160"}
                        borderRadius="lg"
                      />
                    )}

                    <Button
                      type="submit"
                      variant={"outline"}
                      colorScheme="twitter"
                      width={"full"}
                      isLoading={onSubmitting}
                    >
                      Conform
                    </Button>
                    <Button
                      variant={"link"}
                      onClick={() => navigateRoute("/settings")}
                    >
                      Cancel
                    </Button>
                  </VStack>
                </form>
              )}
            </Box>
          </Box>
        </AdminNav>
      ) : (
        <>
          <Navbar />
          <Box flex={1} bg={"white"}>
            <Box>
              <Heading color={"#257275"} textAlign="left" ml={"4"}>
                EDIT INFORMATION
              </Heading>
            </Box>
            {/* <Box bg="white" borderRadius="lg" width={"2xl"} margin="auto"> */}
            <Box
              m={2}
              color="#0B0E3F"
              p="6"
              boxShadow={"lg"}
              width="2xl"
              borderRadius="2xl"
              bg={"white.100"}
            >
              <Text textAlign="left" fontSize={"2xl"} fontWeight="bold" mb={4}>
                Account Info:
              </Text>

              {loading ? (
                <></>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <VStack spacing={4}>
                    <FormControl>
                      <FormLabel>Full Name:</FormLabel>
                      <Input
                        variant={"outline"}
                        size="md"
                        type={"text"}
                        {...register("name")}
                      />
                    </FormControl>
                    {/* <FormControl>
         <FormLabel>Email:</FormLabel>
         <Input variant={"outline"} size="md" type={"text"} {...register("")} />
       </FormControl> */}
                    {/* <FormControl>
         <FormLabel>Username:</FormLabel>
         <Input variant={"outline"} size="md" type={"text"} />
       </FormControl> */}
                    {/* <FormControl>
         <FormLabel>Phone:</FormLabel>
         <Input variant={"outline"} size="md" type={"tel"} />
       </FormControl> */}
                    <FormControl>
                      <FormLabel>Bio:</FormLabel>
                      <Textarea
                        variant={"outline"}
                        type="text"
                        {...register("bio")}
                      />
                    </FormControl>

                    <FormControl>
                      {/* <FormLabel>Profile:</FormLabel> */}
                      <Input
                        display={"none"}
                        ref={profileRef}
                        type={"file"}
                        onChange={handleProfile}
                      />
                    </FormControl>

                    <Button onClick={handleRef}>Upload Profile</Button>
                    <Text>Your profile picture</Text>
                    {profileStore === "" ? (
                      <Image
                        src={`${baseUrl}${editingData.profile}`}
                        alt="Newly added Profile Picture"
                        boxSize={"160"}
                        borderRadius="lg"
                      />
                    ) : (
                      <Image
                        src={URL.createObjectURL(profileStore)}
                        alt="Your Profile"
                        boxSize={"160"}
                        borderRadius="lg"
                      />
                    )}

                    <Button
                      type="submit"
                      variant={"outline"}
                      colorScheme="twitter"
                      width={"full"}
                      isLoading={onSubmitting}
                    >
                      Conform
                    </Button>
                    <Button
                      variant={"link"}
                      onClick={() => navigateRoute("/settings")}
                    >
                      Cancel
                    </Button>
                  </VStack>
                </form>
              )}
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Editprofile;
