import Alpine from "alpinejs";
import ScrollReveal from "scrollreveal";

Alpine.data("indexPage", ()=>({
    loading: <boolean>true,

    init() {
        ScrollReveal().reveal(".section");
        ScrollReveal().reveal(".section-block");
        ScrollReveal().reveal(".multilines-block");
        setTimeout(()=>{
            this.loading = !this.loading;
        }, 600)
    }
}));

Alpine.start();