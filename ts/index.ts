import Alpine from "alpinejs";
import ScrollReveal from "scrollreveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'
import axios, {AxiosResponse} from "axios";
import {axiosInstant} from "./axios";
import HomepageInterface from "./interfaces/homepage.interface";
import ContentInterface from "./interfaces/content.interface";
import AnswerInterface from "./interfaces/answer.interface";
import LinksInterface from "./interfaces/links.interface";
import SkillsInterface from "./interfaces/skills.interface";
import WorkExperiencesInterface from "./interfaces/workexperiences.interface";
import EducationsInterface from "./interfaces/educations.interface";
import LanguagesInterface from "./interfaces/languages.interface";

// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load({
    apiKey: "7JVeKMOz0LGatr3xZRd7"
})

// Get the visitor identifier when you need it.
fpPromise
    .then(fp => fp.get())
    .then(result => console.log(result.visitorId));

type ApiAnswerType = [
    AxiosResponse<AnswerInterface<ContentInterface<HomepageInterface>>>,
    AxiosResponse<AnswerInterface<ContentInterface<LinksInterface>[]>>,
    AxiosResponse<AnswerInterface<ContentInterface<SkillsInterface>[]>>,
    AxiosResponse<AnswerInterface<ContentInterface<WorkExperiencesInterface>[]>>,
    AxiosResponse<AnswerInterface<ContentInterface<EducationsInterface>[]>>,
    AxiosResponse<AnswerInterface<ContentInterface<LanguagesInterface>[]>>,
];

Alpine.data("indexPage", () => ({
    loading: <boolean>true,
    homepage: <HomepageInterface>{},
    links: <AnswerInterface<ContentInterface<LinksInterface>[]>> {},
    skills: <AnswerInterface<ContentInterface<SkillsInterface>[]>> {},
    jobs: <AnswerInterface<ContentInterface<WorkExperiencesInterface>[]>> {},
    educations: <AnswerInterface<ContentInterface<EducationsInterface>[]>> {},
    languages: <AnswerInterface<ContentInterface<LanguagesInterface>[]>> {},

    init() {
        ScrollReveal().reveal(".section");
        ScrollReveal().reveal(".section-block");
        ScrollReveal().reveal(".multilines-block");

        AOS.init({
            useClassNames: true,
            initClassName: "section",
            animatedClassName: "animate__fadeInLeft"
        });

        Promise.all([
            axiosInstant.get("homepage"),
            axiosInstant.get("social-links"),
            axiosInstant.get("skills"),
            axiosInstant.get("work-experiences?sort=id%3Adesc"),
            axiosInstant.get("educations"),
            axiosInstant.get("languages")
        ])
            .then((response: ApiAnswerType) => {
                this.homepage = response[0].data.data.attributes;
                this.links = response[1].data;
                this.skills = response[2].data;
                this.jobs = response[3].data;
                this.educations = response[4].data;
                this.languages = response[5].data;
                this.loading = !this.loading;
            });
    }
}));

Alpine.start();
