import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "faisal",
    email: "faisal@gamil.com",
  },
});
UserContext.displayName =
  "UserContext"; /*this isonly for debugging it show context name as userContextt in react developer tools profiler */
export default UserContext;
