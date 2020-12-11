import { Container, CssBaseline, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../Home/Header'

const useStyles = () => ({
   descr: {

   } 
})

const About = () => {
    return (
        <Container maxWidth="lg" style={{minHeight:'100vh'}}>
            <CssBaseline />
            <Header title="About us"  isAbout={false}/>
            <section style={{padding:'0 24px'}}>
                <Typography paragraph>
                    LOGOS POLYTECHNIKOS je vysokoškolský odborný recenzovaný časopis, který slouží pro publikační aktivity akademických pracovníků Vysoké školy polytechnické Jihlava i jiných vysokých škol, univerzit a výzkumných organizací. Je veden na seznamu recenzovaných odborných a vědeckých časopisů ERIH PLUS - European Reference Index for the Humanities and the Social Sciences.
                </Typography>
                
                <Typography paragraph>
                    Od roku 2010 do roku 2018 byl časopis vydáván čtyřikrát ročně v elektronické a tištěné podobě. Od roku 2019 vychází třikrát ročně v elektronické verzi. Redakční rada časopisu sestává z interních i externích odborníků. Funkci šéfredaktora zastává prorektor pro tvůrčí a projektovou činnost Vysoké školy polytechnické Jihlava. Funkce odpovědných redaktorů jednotlivých čísel přísluší vedoucím kateder Vysoké školy polytechnické Jihlava. Veškeré vydávané příspěvky prochází recenzním řízením a jsou pečlivě redigovány.
                </Typography>
                
                <Typography paragraph>
                    Tematické a obsahové zaměření časopisu reflektuje potřeby oborových kateder Vysoké školy polytechnické Jihlava. Na základě souhlasu odpovědného redaktora mohou katedry poskytnout publikační prostor i odborníkům bez zaměstnanecké vazby k Vysoké škole polytechnické Jihlava.
                </Typography>
                
                <Typography paragraph>
                    V časopise je možné publikovat odborné články, statě, přehledové studie, recenze a další typy odborných příspěvků v českém, slovenském a anglickém jazyce. Do recenzního řízení jsou přijímány příspěvky tematicky odpovídající zaměření časopisu a formálně upravené dle redakční šablony (viz níže).
                </Typography>
            </section>
        </Container>
    )
}

export default About