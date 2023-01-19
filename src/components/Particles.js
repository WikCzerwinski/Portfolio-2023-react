import Particles from 'react-tsparticles';
// import { loadSlim } from 'tsparticles-slim';
import { loadFull } from 'tsparticles';
import { useCallback, useMemo } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';

const ParticlesComponent = () => {
    const options = useMemo(() => {
        return {
            interactivity : {
                events : {
                    onHover: {
                        enable : true,
                        mode: "repulse",
                    }
                },
            },
            particles : {
                links : {
                    enable : true,
                },
            move : {
                enable : true,
            },
        }
        };
    }, []);

const particlesInit = useCallback((engine) => {
    // loadSlims(engine);
    loadFull(engine);
}, []);

    return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;