const themeBtn1 = document.querySelector('#themeBtn1')
const themeBtn2 = document.querySelector('#themeBtn2')

themeBtn1.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
themeBtn2.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

const tl = gsap.timeline({ defaults: { ease: 'back' } })

tl.from('.illus', {
    opacity: 0,
    duration: 3,
    delay: 1
}).to('#y-1', {
    x: '200px',
    repeat: -1,
    yoyo: true,
    duration: .8
}, '-=5').to('#y-2', {
    x: '150px',
    repeat: -1,
    yoyo: true,
    duration: .5
}, '-=5').to('#y-3', {
    x: '50px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5').to('#r-1', {
    x: '100px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5')

const tl2 = gsap.timeline({ defaults: { ease: 'power4' } })

tl2.from('.hero img', {
    opacity: 0,
    y: '-20%',
    duration: 2,
    delay: 1
}).from('.hero .heroTitle', {
    opacity: 0,
    y: '100%',
    duration: 1
}, '-=2').from('.hero .heroBtns #btn', {
    opacity: 0,
    y: '100%',
    duration: .2,
    stagger: .3
}, '-=1').from('.navbar', {
    opacity: 0,
    duration: 2,
    delay: 1
}, '-=2')

const scrollAbt = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        // markers: true,
        start: '400px bottom',
        end: 'top top',
        // scrub: true
    }
})

scrollAbt.from('.about .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.about .aboutContent span', {
    y: '50%',
    opacity: 0,
    duration: 0.7,
    stagger: 0.2
}).from('.about .abtBtn', {
    y: '100%',
    opacity: 0,
    duration: 0.2
})


const scrollSkills = gsap.timeline({
    scrollTrigger: {
        trigger: '.skills',
        // markers: true,
        start: '400px bottom',
        end: 'top top',
        // scrub: true
    }
})

scrollSkills.from('.skills .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.skills .cardRow .card', {
    x: '-100%',
    opacity: 0,
    duration: 0.5,
    stagger: .1
}, '-=0.6')

const scrollProjects = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        // markers: true,
        start: '400px bottom',
        end: 'top top',
        // scrub: true
    }
})

scrollProjects.from('.projects .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.projects .cardRow .card', {
    x: '-100%',
    opacity: 0,
    duration: 0.5,
    stagger: .1
}, '-=0.6')


const scrollContact = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        // markers: true,
        start: 'top bottom',
        end: 'top center',
        // scrub: true
    }
})


scrollContact.from('.contact .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.contact .iconRow .icon', {
    x: '-100%',
    opacity: 0,
    duration: 0.5,
    stagger: .1
}, '-=0.6')

// particle js
particlesJS(
    // this is the ID your particles container needs to have
	"particles-js",
    {
        "particles": {
          "number": {
            "value": 142,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#e5bf07"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1.785351998376954,
              "opacity_min": 0.08115236356258881,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 0,
            "color": "#f0c808",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.6024100246771158,
            "direction": "bottom-left",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
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
      }
)
