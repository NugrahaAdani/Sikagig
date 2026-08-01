import { useLayoutEffect } from "react";
import Nav from "../components/Nav";
import DotField from "../components/DotField";
import Footer from "../components/Footer";
import TermsText from "../components/termsText";

export default function Terms(){
    useLayoutEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
    }, [])

    return (
        <main className="relative isolate min-h-screen">
            {/* background */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <DotField
                    dotRadius={1.5}
                    dotSpacing={14}
                    bulgeStrength={67}
                    glowRadius={160}
                    sparkle={false}
                    waveAmplitude={0}
                    cursorRadius={500}
                    cursorForce={0.1}
                    bulgeOnly
                    gradientFrom="#A855F7"
                    gradientTo="#B497CF"
                    glowColor="#120F17"
                />
            </div>

            <div className="z-10 relative text-white">
                <Nav/>
                <TermsText />
                <Footer/>
            </div>
        </main>
    )
}