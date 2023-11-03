import { createContext, useState } from "react";
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [display,setDisplay] = useState(false);
  const [lightMode,setLightMode] = useState(true);
  const [statusgroup,setStatusGroup] = useState(true);
  const [usergroup,setUserGroup] = useState(false);
  const [prioritygroup,setPriorityGroup] = useState(false);
  const [priorityorder,setPriorityOrder] = useState(true);
  const [titleorder,setTitleOrder] = useState(false);
  const [data,setData]=useState(null);
  const [visibility,setVisibility] = useState({
    sg:true,
    ug:false,
    pg:false,
    po:false,
    to:false
  })

  const value = {
    display,
    setDisplay,
    lightMode,
    setLightMode,
    statusgroup,
    setStatusGroup,
    usergroup,
    setUserGroup,
    prioritygroup,
    setPriorityGroup,
    priorityorder,
    setPriorityOrder,
    titleorder,
    setTitleOrder,
    data,
    setData,
    visibility,
    setVisibility
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
