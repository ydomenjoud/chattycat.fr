/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./maintenance.sass"
import "./layout.css"
import cleoLefort from "../images/books/cleo-lefort.png"
import theGuardians from "../images/books/the-guardians.png"
import comingSoon from "../images/coming-soon.png"
import logo from "../images/logo.png"

const Layout = () => {

  return (
    <>
      <main>
        {/*{children}*/}

        <div className="container">
          <section className="w50">
            <article>
              <img src={logo} alt="Chattycat logo"/>
              <p>
                Notre site internet se refait une beauté ! Nous serons bientôt de retour avec de nombreux nouveaux
                projets à vous présenter.
              </p>


              <label htmlFor="email">Newsletter</label>
              <form id="newsletter">
                  <input type="email" name="email" id="email" placeholder="email"/>
                  <button type="submit">ENVOYER</button>
              </form>
            </article>
            <article>
              <img src={comingSoon} alt="Comming Soon" id="comingSoon"/>
            </article>
          </section>
        </div>

      </main>
      <footer>

        <div className="container">

          <section id="inNextVersion" className="w50">
            <article>
              <h3>Prochainement...</h3>
              <p>
                <img src={cleoLefort}  alt="cleo lefort"/>
                En août, notre série phare Cléo Lefort sera de nouveau disponible dans votre librairie, avec un tout
                nouveau look !
              </p>
            </article>
            <article>
              <h3>Et aussi...</h3>
              <p>
                <img src={theGuardians}  alt="the guardians"/>
                En septembre, vous pourrez suivre les aventures d'Edwin Lancaster et de la dangereuse société secrète
                qui le menace dans les deux premiers tomes de la trilogie des Guardians.
              </p>
            </article>
          </section>
        </div>

        <div id="lastRow">
          <div className="container">
            © {new Date().getFullYear()} CHATTYCAT - Tous droits réservés - <a
            href="contact@chattycat.fr">contact@chattycat.fr</a>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
