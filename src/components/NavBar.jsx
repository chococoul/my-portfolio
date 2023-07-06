import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Sayon&apos;s Portfolio
                </Link>
            </div>
            <a href="https://drive.google.com/file/d/11Nj0JaxPh5YGZqpM20hSmWvD0Qybf-RY/view?usp=drive_link" className="cta-btn" target="_blank">Resume</a>
        </div>
    )
}

export default Navbar;