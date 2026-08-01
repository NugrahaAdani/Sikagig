import { useEffect, useLayoutEffect } from 'react';
import DotField from '../components/DotField';
import Nav from '../components/Nav';
import HeroSection from '../sections/HeroSection';
import FeatureMetrics from '../sections/FeatureMetrics';
import HowItWorks from '../sections/HowItWorks';
import Example from '../sections/Example';
import Help from '../sections/Help';
import WhyUs from '../sections/WhyUs';
import Faq from '../sections/Faq';
import Footer from '../components/Footer';

export default function HomePage(){
    useLayoutEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
        if (!window.location.hash) {
            window.scrollTo(0, 0)
        }
    }, [])

    useEffect(() => {
        const hash = window.location.hash
        if (!hash) return

        // Tunggu DOM selesai render lalu scroll ke element
        const id = hash.slice(1)
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
            return
        }

        // Kalau belum ada (lazy render), retry beberapa kali
        let attempts = 0
        const interval = setInterval(() => {
            const target = document.getElementById(id)
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
                clearInterval(interval)
            }
            if (++attempts > 10) clearInterval(interval)
        }, 100)

        return () => clearInterval(interval)
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

            {/* content */}
            <div className="z-10 relative text-white">
                <Nav />
                <HeroSection />
                <FeatureMetrics />
                <HowItWorks />
                <Example />
                <Help />
                <WhyUs />
                <Faq />
                <Footer />
            </div>
        </main>
    )
}

