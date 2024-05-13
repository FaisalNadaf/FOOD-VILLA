import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "faisal",
    email: "faisal@gamil.com",
  },
});

export default UserContext;
