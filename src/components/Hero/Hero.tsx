import "./Hero.css";

interface HeroProps {
    image: string;
    title: string;
}
const Hero = ({title, image}: HeroProps) => {
    return (
        <section className="hero">
            <h1>{title}</h1>
            <p className="description"></p>
            <img src={image} alt={title} />
        </section>
    )
}

export default Hero;