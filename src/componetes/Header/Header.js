import "./Header.css"

function Header() {
    // Regresar un elemento HTML y las clases le ponermos className
    return <header className="header">
        {/*Anidar elementos HTML */}
        <img src="/img/header.png" alt="Org" />
    </header>
    
};

// Hay que exportar el componente sino no funciona
export default Header;