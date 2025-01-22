import '../css/Header.css';

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <>
    <header style={{ fontSize: "1.3em", textAlign: "center" }}>
        <h1>{title}</h1>
    </header>
    <img src="/banner.jpg" alt="Banner" style={{ width: "100%", height: "auto" }} />
    </>
  )
}

export default Header