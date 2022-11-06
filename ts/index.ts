import Alpine from "alpinejs";
import ScrollReveal from "scrollreveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'

// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load({
  apiKey: "7JVeKMOz0LGatr3xZRd7"
})

// Get the visitor identifier when you need it.
fpPromise
  .then(fp => fp.get())
  .then(result => console.log(result.visitorId));


Alpine.data("indexPage", ()=>({
    loading: <boolean>true,

    init() {
        ScrollReveal().reveal(".section");
        ScrollReveal().reveal(".section-block");
        ScrollReveal().reveal(".multilines-block");

        AOS.init({
            useClassNames: true,
            initClassName: "section",
            animatedClassName: "animate__fadeInLeft"
        });

        setTimeout(()=>{
            this.loading = !this.loading;
        }, 300)
    }
}));

Alpine.start();
