import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaUserEdit, FaKey } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminNav from "../useableComponent/AdninNav";
import Navbar from "../useableComponent/Navbar";

const SettingPage = () => {
  const navigateRoute = useNavigate();
  const selector = useSelector((state) => state.reducer);
  return (
    <>
      {selector.isAdmin === true ? (
        <AdminNav>
          <Flex>
            <HStack gap={5}>
              <Box>
                <Button
                  colorScheme={"telegram"}
                  m="4"
                  p={"2"}
                  leftIcon={<FaUserEdit size={"25"} />}
                  //   variant="ghost"
                  onClick={() => navigateRoute("/edit_profile")}
                >
                  {" "}
                  Edit Profile
                </Button>
              </Box>
              <Box>
                <Button
                  colorScheme={"teal"}
                  m="4"
                  leftIcon={<FaKey size={"25"} />}
                  //   variant="ghost"
                  onClick={() => navigateRoute("/change_password")}
                >
                  {" "}
                  Change Password
                </Button>
              </Box>
            </HStack>
          </Flex>
        </AdminNav>
      ) : (
        <>
          <Navbar />
          <Flex>
            <HStack gap={5}>
              <Box>
                <Button
                  colorScheme={"telegram"}
                  m="4"
                  p={"2"}
                  leftIcon={<FaUserEdit size={"25"} />}
                  //   variant="ghost"
                  onClick={() => navigateRoute("/edit_profile")}
                >
                  {" "}
                  Edit Profile
                </Button>
              </Box>
              <Box>
                <Button
                  colorScheme={"teal"}
                  m="4"
                  leftIcon={<FaKey size={"25"} />}
                  //   variant="ghost"
                  onClick={() => navigateRoute("/change_password")}
                >
                  {" "}
                  Change Password
                </Button>
              </Box>
            </HStack>
          </Flex>
        </>
      )}
    </>
  );
};

export default SettingPage;
