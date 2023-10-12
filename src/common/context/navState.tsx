import React, { createContext, useState, ReactNode } from 'react';

interface MenuContextData {
    isMenuOpen: boolean;
    toggleMenuMode: () => void;
}

export const MenuContext = createContext<MenuContextData>({
    isMenuOpen: true,
    toggleMenuMode: () => {},
});

interface NavStateProps {
    children: ReactNode;
}

const NavState: React.FC<NavStateProps> = ({ children }) => {
    const [isMenuOpen, toggleMenu] = useState<boolean>(false);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
            {children}
        </MenuContext.Provider>
    );
};

export default NavState;