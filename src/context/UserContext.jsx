import { createContext, useState } from "react";

export const x = createContext(null);

const UserContext = (props) => {
    // console.log(props);
    
  const [data, setdata] = useState("durgain, gurgeshwari");
  return <x.Provider value={[data, setdata]}>
    {props.children}
  </x.Provider>;
};

export default UserContext;
