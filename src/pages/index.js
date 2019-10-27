import React from 'react'
import Layout from '../components/layout'
import Photoslidertop from '../components/wt/photoslidertop'
import Floatingfeaturedblocks from '../components/wt/floatingfeaturedblocks'
import Upcomingmatchbgpicturetop from '../components/wt/upcomingmatchbgpicturetop'
import Standings from '../components/standings'
import Previousmatch from '../components/wt/previousmatch'
import Watchlive from '../components/watchlive'


const Index = () => (
    <Layout>
        <Photoslidertop />
        <Floatingfeaturedblocks />
        <Standings />
        <Upcomingmatchbgpicturetop />
        <Previousmatch />
        <Watchlive />
    </Layout>
)

export default Index