// importerar cssfil för specifika stilar för headern

import '../css/Header.css';

// skapar ett interface som anger vilka props (egenskaper) header-komponenten ska ha
// här tar header en "title" av typen string.
interface HeaderProps {
    title: string; // titeln som visas i headern
}

// komponent för headern på webbplatsen
// tar emot propen "title" som skickas från den komponent där header används, alltså i app.tsx
function Header({ title }: HeaderProps) {
  return (
    <>
    <header style={{ fontSize: "1.3em", textAlign: "center" }}>

      {/* visar titeln som skickas som prop */}
        <h1>{title}</h1>
    </header>

    {/* bannerbilden som visas under headern */}
    <img src="/banner.jpg" alt="Banner" style={{ width: "100%", height: "auto" }} />
    </>
  )
}

// exporterar komponenten så att den kan avändas i andra filer, tex app.tsx
export default Header