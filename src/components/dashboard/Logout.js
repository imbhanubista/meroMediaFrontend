import { Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionReducer } from "../../redux/actions/actionReducer";

const Logout = () => {
  // let selector = useSelector(state=>state.reducer)
  const dispatch = useDispatch();
  const loginRoute = useNavigate();
  useEffect(() => {
    dispatch(actionReducer(""));
    loginRoute("/login");
  }, []);

  return (
    <div>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text>Logout</Text>
    </div>
  );
};

export default Logout;
