// importerar cssfil för specifika stilar för footern

import '../css/Footer.css';

// komponent för footern på webbplatsen
function Footer() {
  return (
    // "behållare" för innehållet i footern
    <footer style={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>
        
        {/* statiskt innehåll */}
        <p>&copy; Av Julie Andersson - Kontakta mig via e-post: 
        <a href="mailto:juan2301@student.miun.se"> juan2301@student.miun.se</a>
        </p>
    </footer>
  )
}

// exporterar komponenten så att den kan avändas i andra filer, tex app.tsx
export default Footer