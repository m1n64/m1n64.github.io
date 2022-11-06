import Alpine from "alpinejs";
import ScrollReveal from "scrollreveal";
import AOS from 'aos';
import 'aos/dist/aos.css';

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