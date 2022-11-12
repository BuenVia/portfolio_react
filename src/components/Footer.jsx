export default function Footer() {
    const date = new Date().getFullYear()
    
    return (
        <footer>
            <p className="text-muted">Copyright Matthew Clifford {date}</p>
        </footer>
    )
}