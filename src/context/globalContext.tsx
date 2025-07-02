import React, {createContext, useState, ReactNode, useContext} from 'react';

type GlobalContextType = {
    isShowParticipant: boolean;
    setIsShowParticipant: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType>({
    isShowParticipant: false,
    setIsShowParticipant: () => {
    },
});

const GlobalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isShowParticipant, setIsShowParticipant] = useState(true);
    const value = {isShowParticipant, setIsShowParticipant};

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};
const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;

export {useGlobalContext};
