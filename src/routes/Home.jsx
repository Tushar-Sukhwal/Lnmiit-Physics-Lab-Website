import NavBar from "../components/NavBar";
import AnimatedLogo from "../components/AnimatedLogo";
import Footer from "../components/Footer";
import Content from "../components/Content";
import useIsMobile from "../hooks/WindowResize";
import MobileNavbar from "../components/MobileNavbar";
import App from "../App";

const Home = () => {
	return (
		<div>
			<NavBar />
			<MobileNavbar />
			<AnimatedLogo />
			<Content />
			<Footer />
		</div>
	);
};
export default Home;
