import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profil.jpg' className="profile-img" width={300} height={300} alt="Sayon's personal headshot"  />
            <div className="hero-text">
                <h1>Hey, I&apos;m Sayon  👋</h1>
                <p>
                    I&apos;m a software developer based in Bamako, Mali. I specialize in building (and occasionally designing)
                     exceptional websites, web and mobile applications, and everything in between.
                </p>
                <div className="social-icons">
                    
                    <a
                        href="https://github.com/chococoul"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sayon-coulibaly-9a95b3107/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;