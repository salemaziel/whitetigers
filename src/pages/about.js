import React from 'react'
import Layout from '../components/layout'
import Aboutushero from '../components/wt/Aboutushero'
import Aboutsection2 from '../components/wt/Aboutsection2'
import Aboutsection3 from '../components/wt/Aboutsection3'
import Teamrowaboutco from '../components/wt/Teamrowaboutco'



const About = () => (
    <Layout>
        <Aboutushero />
        <Aboutsection2 />
        <Aboutsection3 />
        <div className="container">
            <Teamrowaboutco />
            <div className="text-black" style={{
                marginBottom: '4em',
                padding: '2em',
            }}>
                <p>
                Sung Hyun Emmanuel Yoo Lopez is Owner White Tigers Futbol Club.</p>
                <p> A native of Mexico, Yoo Lopez, 30, graduated from Escondido (Calif.) High School and played professionally in Mexico's second division. He currently is a business owner in the retail industry.
                White Tigers Futbol Club Owner Sung Hyun Emmanuel Yoo Lopez said, "I want to take this to the next level, so that way I can help players move on, get scholarships and even play professional soccer. That's my goal. That's my motivation. In the future, I want my players to play professional, and when they're asked where they played, they'll say, 'White Tigers FC'."
                </p>

                <p>Jorge Piña is Head Coach of White Tigers FC. A native of Mexico, Piña was signed by Chivas Guadalajara and played professionally in Mexico's second division.

                </p>
            </div>

        </div>

    </Layout>
)

export default About