import React from 'react'
import Particles from 'react-particles-js'; 

const ParticleScript = () => {
return(
    
<Particles
    width="100%"
    height="100%"
    style={{
        position: `absolute`,
        top: 0,
        left: 0,
        backgroundSize: `cover`,
        backgroundPosition: `50% 50%`,
        backgroundRepeat: `no-repeat`,
        zIndex: '1'
    }}
    params={{
	    particles: {
            color: {
              value: "#FFFFFF"
            },
            line_linked: {
              color: {
                value: "#FFFFFF"
              }
            },
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          },
	    "interactivity": {
            "detect_on": "window",
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "grab"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                  "distance": 300,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
	}} />
    )


}

export default ParticleScript