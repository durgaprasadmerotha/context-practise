// import Headerchild from "./Headerchild";

// const Header = (props) => {
//   const { data } = props;
//   return <div>header: {data}
//   <Headerchild data={data} />
//   </div>;
// };

// export default Header;

//+++++++++++++++++++++++++++++++++++context 1++++++++++++++++++++++++++++++++++++++++++++//

import { useContext } from "react";
import { x } from "../context/UserContext";

const Header = () => {
  const [data, setdata] = useContext(x)

  return <div>{data}</div>};



export default Header;
