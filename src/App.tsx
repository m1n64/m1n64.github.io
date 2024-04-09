import React, {useCallback, useEffect} from "react";
import {Box, Button, Flex, Grid, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";

// @ts-ignore
import photo from './assets/ebalo.jpg';
import dataEn from './data/en.json';
// @ts-ignore
import cvEn from './assets/CV.pdf';
// @ts-ignore
import cvRu from './assets/CV (Rus).pdf';
import {SimpleHeader} from "./Components/Heading/SimpleHeader/SimpleHeader.tsx";
import {Line} from "./Components/Line/Line.tsx";
import {SimpleList} from "./Components/Lists/SimpleList/SimpleList.tsx";
import {BlockHeader} from "./Components/Heading/BlockHeader/BlockHeader.tsx";
import {CompositeListElement} from "./Components/Lists/CompositeList/CompositeListElement.tsx";
import {Contacts, Education, Language, Location, Skills, Work} from "./Icons";
import './App.css'
import {Head} from "./Components/Head/Head.tsx";
import {getQuery, setQuery} from "./functions/url.tsx";


function App() {
    const [locale, setLocale] = React.useState<string>(() => {
        const lang = getQuery('lang', 'en');
        if (lang !== 'en' && lang !== 'ru') {
            return 'en';
        }

        return lang;
    });
    const [data, setData] = React.useState<any>(dataEn);
    const [cvFile, setCvFile] = React.useState<any>(cvEn);

    const changeLocale = (locale: string) => {
        setLocale(locale);

        setQuery('lang', locale);
    }

    const loadData = useCallback(async () => {
        try {
            const data = await import(`./data/${locale}.json`);
            setData(data.default);

            setCvFile(locale === 'en' ? cvEn : cvRu);
        } catch (error) {
            console.error('Could not load locale data', error);
        }
    }, [locale]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <>
            <Head
                language={locale}
            />

            <Grid
                h="100vh"
                templateRows={{base: "auto 1fr auto", md: "auto 1fr"}}
                templateColumns={{base: "100%", md: "20% 1fr"}}
                templateAreas={{
                    base: `"nav"
               "main"`,
                    md: `"header header"
             "nav main"`
                }}
            >
                {/* Navigation/Sidebar */}
                <Box gridArea="nav" bg="accent.100" color="textAccent.100" p={4} borderRadius={"0 15px 15px 0"}>
                    <Box>
                        <Image src={photo} alt='Kirill Sakharov' borderRadius={"15px"}/>
                    </Box>
                    <SimpleHeader
                        text={data.location}
                        icon={
                            <Location/>
                        }
                    />

                    <Box marginY="50px">
                        <SimpleHeader
                            text={data.contacts.name}
                            icon={
                                <Contacts/>
                            }
                            big
                        />
                        <SimpleList>
                            {/* @ts-ignore */}
                            {data.contacts.data.map(el => <Box><Link href={el.link} isExternal>{el.title}</Link></Box>)}
                        </SimpleList>
                    </Box>

                    <Box marginY="50px">
                        <SimpleHeader
                            text={data.skills.name}
                            icon={
                                <Skills/>
                            }
                            big
                        />
                        <SimpleList>
                            {/* @ts-ignore */}
                            {data.skills.data.map(el => <Text>{el}</Text>)}
                        </SimpleList>
                    </Box>

                    <Box marginY="50px">
                        <SimpleHeader
                            text={data.languages.name}
                            icon={
                                <Language/>
                            }
                            big
                        />

                        <SimpleList>
                            {/* @ts-ignore */}
                            {data.languages.data.map(el => <Box>{el.title} - {el.level}</Box>)}
                        </SimpleList>
                    </Box>

                    <Box>
                        <Link href={cvFile} download>
                            <Button color={"white"} bg={"textAccent.100"} _hover={{
                                bg: "textAccent.50"
                            }}>{data.cv.name} ({data.cv.language})</Button>
                        </Link>
                    </Box>
                </Box>

                <Box gridArea="main" p={4}>
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Text as="h1" fontWeight={"bold"} color={"text.100"} fontSize={"3.4em"}
                              textTransform={"uppercase"}>{data.name}</Text>
                        <Menu>
                            <MenuButton as={Button} size="sm">
                                {locale === 'en' ? 'English' : 'Русский'}
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => changeLocale('en')}>English</MenuItem>
                                <MenuItem onClick={() => changeLocale('ru')}>Русский</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>

                    <Text as="h3" color={"text.80"} fontSize={"1.6em"}>{data.jobTitle}</Text>
                    <Line/>
                    <Text as={"p"} className={"pre-lined"} color={"text.100"} fontSize={"1.6em"}>
                        {data.biography}
                    </Text>

                    <Box>
                        <BlockHeader
                            icon={
                                <Work/>
                            }
                            title={data.workExperience.name}
                        />

                        {/* @ts-ignore */}
                        {data.workExperience.data.map(el => (
                            <CompositeListElement
                                name={el.name}
                                additionalInfo={el.position}
                                secondTitle={`${el.date.from} - ${el.date.to} ${el.date.total}`}
                                location={el.location}
                                mainInfo={el.description}
                            />
                        ))}
                    </Box>

                    <Box>
                        <BlockHeader
                            icon={
                                <Education/>
                            }
                            title={data.education.name}
                        />

                        {/* @ts-ignore */}
                        {data.education.data.map(el => (
                            <CompositeListElement
                                name={el.name}
                                additionalInfo={el.additional ?? ""}
                                secondTitle={`${el.date.from} - ${el.date.to}`}
                                location={el.location}
                                mainInfo={el.description}
                            />
                        ))}
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default App
