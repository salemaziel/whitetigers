import React from 'react'
import Layout from '../components/layout'
import Photoslidertop from '../components/wt/photoslidertop'
import Floatingfeaturedblocks from '../components/wt/floatingfeaturedblocks'
import Nextmatchcountdown from '../components/wt/nextmatchcountdown'
import Upcomingmatchbgpicturetop from '../components/wt/upcomingmatchbgpicturetop'

const Index = () => (
    <Layout>
        <Photoslidertop />
        <Floatingfeaturedblocks />
  
        <Upcomingmatchbgpicturetop />
    </Layout>
)

export default Index