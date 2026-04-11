import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	return (
		<main>
			<div className="flex-center h-[100vh]">
				<h1>GSAP Cocktails</h1>
			</div>
		</main>
	);
};

export default App;
