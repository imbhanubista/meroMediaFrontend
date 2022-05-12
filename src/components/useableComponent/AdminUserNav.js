import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const AdminUserNav = () => {
  const selector = useSelector((state) => state.reducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoutRoute = useNavigate();
  const cancelRef = React.useRef();
  const logoutHandler = () => {
    logoutRoute("/logout");
  };
  return (
    <div>
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              <Avatar size={"sm"} src={"https://bit.ly/dan-abramov"} />
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm"> {selector.name} </Text>
                <Text fontSize="xs" color="gray.600">
                  {selector.isAdmin ? "Admin" : "User"}
                </Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
          //   bg={useColorModeValue("white", "gray.900")}
          //   borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem onClick={() => logoutRoute("/settings")}>
              Settings
            </MenuItem>
            <MenuItem
              onClick={() =>
                logoutRoute(
                  selector.isAdmin === true ? "/total_purchase" : "/purchase"
                )
              }
            >
              Purchase
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={onOpen}>Sign out</MenuItem>
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize={"lg"} fontWeight="bold">
                    LOGOUT
                  </AlertDialogHeader>
                  <AlertDialogBody>
                    Are you sure want to logout?
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose} marginRight="2">
                      Cancel
                    </Button>
                    <Button onClick={logoutHandler} colorScheme="red">
                      {" "}
                      Logout{" "}
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </MenuList>
        </Menu>
      </Flex>
    </div>
  );
};

export default AdminUserNav;
