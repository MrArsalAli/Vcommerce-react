import {createContext, useState} from "react";

const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [user, setUser]= useState({
        isLogin : false,
        userInfo: {},
    })

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
    
      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);



      
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext