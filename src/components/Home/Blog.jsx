import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import { setDarkMode} from '../../redux/reducers/articlesReducer'
import Footer from './Footer';
import { connect } from 'react-redux';
import { FormControlLabel, Switch, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TOPICS } from '../../Helps/StageMap';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  mode: {
    width:'100%',
    display:'flex',
    justifyContent:'center'
  },
  itemList: {
    listStyle: 'none'
  },
  links: {
    color: theme.palette.primary.light,
    textDecoration: 'none',
    fontSize: 20
  },
  item: {
    marginBottom: 20
  },
  help: {
    color: theme.palette.primary.light,
    textDecoration: 'none'
  }
}));

function Home({isDark, setDarkMode}) {
  const classes = useStyles();
  

  const darkModeToLocal = () => {
    setDarkMode(true)
    if(!isDark) localStorage.setItem('dark', true)
    else localStorage.removeItem('dark')
  }

  return (
    <React.Fragment>
      <FormControlLabel
        className={classes.mode}
        control={<IOSSwitch checked={isDark} onChange={darkModeToLocal} name="checkedB" />}
        label="Change color mode"
      />
      <CssBaseline />
      <Container>
        <Header title="LOGOS POLYTECHNIKOS" isAbout/>
        <Grid container spacing={3}>

          <Grid item xs={9}>
            <Content/>
          </Grid>

          <Grid item align="right" xs={3} >
            <ul className={classes.itemList}>
              <li className={classes.item}>
                <Link className={classes.links} to={`/category/${TOPICS.PROGRAMMING}`}>Programming</Link>
              </li>
              <li className={classes.item}>
                <Link className={classes.links} to={`/category/${TOPICS.SCIENCE}`}>Science</Link>
              </li>
              <li className={classes.item}>
                <Link className={classes.links} to={`/category/${TOPICS.MEDICINE}`}>Medicine</Link>
              </li>
              <li className={classes.item}>
                <Link className={classes.links} to={`/category/${TOPICS.NAVALNY}`}>Navalny</Link>
              </li>
            </ul>
          </Grid>

        </Grid>
      </Container>
      <Footer title="LOGOS POLYTECHNIKOS" description="Created by DOIT" />
    </React.Fragment>
  );
}

const mapState = (state) => {
  return {
    isDark: state.articles.isDark,
  }
}

const Content = () => {
  const classes = useStyles()
  return (
    <section style={{padding:'0 24px'}}>
      <br/>
      <Typography paragraph>
          <b>LOGOS POLYTECHNIKOS je vysokoškolský odborný recenzovaný časopis</b>, který slouží pro publikační aktivity akademických pracovníků Vysoké školy polytechnické Jihlava i jiných vysokých škol, univerzit a výzkumných organizací. Je veden na seznamu recenzovaných odborných a vědeckých časopisů ERIH PLUS - European Reference Index for the Humanities and the Social Sciences.
      </Typography>
      
      <Typography paragraph>
          Od roku 2010 do roku 2018 byl časopis vydáván čtyřikrát ročně v elektronické a tištěné podobě. Od roku 2019 vychází třikrát ročně v elektronické verzi. Redakční rada časopisu sestává z interních i externích odborníků. Funkci šéfredaktora zastává prorektor pro tvůrčí a projektovou činnost Vysoké školy polytechnické Jihlava. Funkce odpovědných redaktorů jednotlivých čísel přísluší vedoucím kateder Vysoké školy polytechnické Jihlava. Veškeré vydávané příspěvky prochází recenzním řízením a jsou pečlivě redigovány.
      </Typography>
      
      <Typography paragraph>
          <b>Tematické a obsahové zaměření časopisu</b> reflektuje potřeby oborových kateder Vysoké školy polytechnické Jihlava. Na základě souhlasu odpovědného redaktora mohou katedry poskytnout publikační prostor i odborníkům bez zaměstnanecké vazby k Vysoké škole polytechnické Jihlava.
      </Typography>
      
      <Typography paragraph>
          <b>V časopise je možné publikovat</b> odborné články, statě, přehledové studie, recenze a další typy odborných příspěvků v českém, slovenském a anglickém jazyce. Do recenzního řízení jsou přijímány příspěvky tematicky odpovídající zaměření časopisu a formálně upravené dle redakční šablony (viz níže).
      </Typography>
      <Typography>
        V časopise je možné publikovat
        <div><a className={classes.help} href="http://www.vspj.cz/soubory/download/id/7344">Pokyny pro přispěvatele</a></div>
        <div><a className={classes.help} href="http://www.vspj.cz/soubory/download/id/4186">Šablona</a></div>
        <div><a className={classes.help} href="http://www.vspj.cz/soubory/download/id/7345">Recenzní řízení</a></div>
      </Typography>
      <Typography>
          <b>Jazyky, ve kterých lze publikovat: </b>
          angličtina, čeština a slovenština
          <br/>
          Termíny uzávěrek pro sběr příspěvků:

          <ul style={{paddingLeft:40, marginTop: 20}}>
            <li>1/2021 - ošetřovatelství, porodní asistence a další zdravotnické obory (31. 12. 2020)
            <li>2/2021 - ošetřovatelství, porodní asistence a další zdravotnické obory, sociologie, sport, psychologie, sociální práce (30. 4. 2021)</li>
            <li>3/2021 - ekonomika, management, marketing, statistika, operační výzkum, finanční matematika, pojišťovniství, cestovní ruch, regionální rozvoj, veřejná správa (31. 8. 2021)</li></li>
          </ul>
          Pokud rozsah doručených příspěvků překročí kapacitu příslušného vydání, bude přijímání příspěvků ukončeno před uvedeným termínem.
          <br/>
          Adresa pro odesílání příspěvků: logos@vspj.cz
          Kontaktní osoba: Bc. Zuzana Mafková: zuzana.mafkova@vspj.cz
<br/>
          Adresa nakladatele: Vysoká škola polytechnická Jihlava, redakce LOGOS POLYTECHNIKOS, Tolstého 1556/16, 586 01 Jihlava
<br/>
<br/>

          <b>ISSN 2464-7551 (Online)</b>
          <br/>
          <i>Registrace MK ČR E 19390 – pro čísla z let 2010 až 2018 (vydávání tištěné verze časopisu bylo ukončeno).
          ISSN 1804-3682 (Print) – pro čísla z let 2010 až 2018 (vydávání tištěné verze časopisu bylo ukončeno).</i>
          <br/>
          <b>Šéfredaktor</b><br/>
          doc. Ing. Zdeněk Horák, Ph.D. (Vysoká škola polytechnická Jihlava)
          <br/>
          <b>Redakční rada</b><br/>
          prof. PhDr. RNDr. Martin Boltižiar, PhD. (Univerzita Konštantína Filozofa v Nitre)<br/>
          prof. RNDr. Helena Brožová, CSc. (Česká zemědělská univerzita v Praze)<br/>
          doc. PhDr. Lada Cetlová, PhD. (Vysoká škola polytechnická Jihlava)<br/>
          prof. Mgr. Ing. Martin Dlouhý, Dr. MSc. (Vysoká škola ekonomická v Praze)<br/>
          prof. Ing. Tomáš Dostál, DrSc. (Vysoká škola polytechnická Jihlava)<br/>
          doc. Ing. Jiří Dušek, Ph.D. (Vysoká škola evropských a regionálních studií)<br/>
          doc. RNDr. Petr Gurka, CSc. (Vysoká škola polytechnická Jihlava)<br/>
          Ing. Veronika Hedija, Ph.D. (Vysoká škola polytechnická Jihlava)<br/>
          doc. Ing. Zdeněk Horák, Ph.D. (Vysoká škola polytechnická Jihlava)<br/>
          Ing. Ivica Linderová, PhD. (Vysoká škola polytechnická Jihlava)<br/>
          prof. MUDr. Aleš Roztočil, CSc. (Vysoká škola polytechnická Jihlava)<br/>
          doc. PhDr. David Urban, Ph.D. (Vysoká škola polytechnická Jihlava)<br/>
          doc. Dr. Ing. Jan Voráček, CSc. (Vysoká škola polytechnická Jihlava)<br/>
          RNDr. PaedDr. Ján Veselovský, PhD. (Univerzita Konštantína Filozofa v Nitre)<br/>
          doc. Ing. Libor Žídek, Ph.D. (Masarykova univerzita Brno)<br/>
      </Typography>
    </section>
  )
}

export default connect(mapState, {setDarkMode})(Home)
