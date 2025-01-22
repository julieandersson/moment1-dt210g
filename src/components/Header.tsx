import '../css/Header.css';

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header style={{ fontSize: "0.9em", textAlign: "center" }}>
        <h1>{title}</h1>
    </header>
  )
}

export default Header