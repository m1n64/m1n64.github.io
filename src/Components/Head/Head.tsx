import React from "react";
import { Helmet } from 'react-helmet';
// @ts-ignore
import favicon from '../../assets/favico.ico';
// @ts-ignore
import metaImage from '../../assets/meta-bg.png';

type HeadProps = {
    language?: string
}

export const Head: React.FC<HeadProps> = ({language = "en"}) => {
    const meta = {
        name: "KIRILL SAKHAROV | CV",
        description: "CV of Kirill Sakharov - Fullstack Web Developer",
        keywords: "cv, php, laravel, yii, go, golang, react, next.js, typescript",
        author: "Kirill Sakharov",
    };

    if (language === "ru") {
        meta.name = "КИРИЛЛ САХАРОВ | Резюме";
        meta.description = "Резюме Кирилла Сахарова - Fullstack Web Developer";
        meta.keywords = "резюме, php, laravel, yii, go, golang, react, next.js, typescript";
        meta.author = "Кирилл Сахаров";
    }

    return (
        <>
            <Helmet>
                <title>{meta.name}</title>
                <link rel="icon" href={favicon} type="image/x-icon" />
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta name="author" content={meta.author} />
                <meta property="og:title" content={meta.name} />
                <meta property="og:site_name" content="Kirill Sakharov CV" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={metaImage} />
                <meta property="og:url" content="https://m1n64.github.io/" />
                <meta property="og:type" content="profile" />
                <meta name="X:title" content={meta.name} />
                <meta name="X:description" content={meta.description} />
                <meta name="X:image" content={metaImage} />
                <meta name="X:card" content="summary_large_image" />
                <meta name="robots" content="all" />
            </Helmet>
        </>
    );
}