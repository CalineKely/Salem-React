import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Accueil from "../accueil/Accueil"
import Footer from "../common/footer/Footer"
import Surnous from "../surnous/Surnous"
import Sary from "../sary/Sary"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Autrereservations from "../autrereservations/Autrereservations"


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Accueil} />
          <Route exact path='/sur nous' component={Surnous} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/galerie' component={Sary} />
          <Route exact path='/autres reservations' component={Autrereservations} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
