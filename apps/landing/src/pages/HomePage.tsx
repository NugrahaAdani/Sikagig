import { useLayoutEffect } from 'react';
import DotField from '../components/DotField';
import Nav from '../components/Nav';
import HeroSection from '../sections/HeroSection';
import FeatureMetrics from '../sections/FeatureMetrics';
import HowItWorks from '../sections/HowItWorks';

export default function HomePage(){
    useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)
    }, [])

    return (
        <main className="relative isolate min-h-screen">
            
            {/* background fix */}
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

            {/* content */}
            <div className="z-10 relative text-white">
                <Nav />
                <HeroSection />
                <FeatureMetrics />
                <HowItWorks />


                {/* section lainnya */}
                {/* <Footer /> */}
            </div>

        </main>
    )
}

