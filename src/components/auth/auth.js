import { useContext } from "react";
import { When } from "react-if";
import { AuthContext } from "../../context/authContext";
// create a Auth component that holds the logic that decides what to render based on a users role and capabilities

export default function Auth(props) {
  const state = useContext(AuthContext);

  const isLoggedIn = state.loggedIn;
  const canDo = state.can(props.capability);
  const okToRender = isLoggedIn && canDo;

  return <When condition={okToRender}>{props.children}</When>;
}
