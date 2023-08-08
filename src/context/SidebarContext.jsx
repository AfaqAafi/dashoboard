    import { useContext } from "react";
    import { createContext, useState } from "react";

    export const SidebarContext = createContext("");

    export const SidebarContextProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <SidebarContext.Provider value={{ toggleSidebar, isSidebarOpen }}>
        {children}
        </SidebarContext.Provider>
    )
    };

    export const useSidebar = () => {
       return useContext(SidebarContext);
    };


