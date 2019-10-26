import React from 'react'
import Layout from '../components/layout'
import Photoslidertop from '../components/wt/photoslidertop'
import Floatingfeaturedblocks from '../components/wt/floatingfeaturedblocks'
//import Nextmatchcountdown from '../components/wt/nextmatchcountdown'
import Upcomingmatchbgpicturetop from '../components/wt/upcomingmatchbgpicturetop'
import Previouslatestmatches from '../components/wt/previouslatestmatches'
import Upcomingmatchesall from '../components/wt/upcomingmatchesall'
import Watchlive from '../components/watchlive'

const Index = () => (
    <Layout>
        <Photoslidertop />
        <Floatingfeaturedblocks />
        <Watchlive />
        <Upcomingmatchbgpicturetop />
        <Previouslatestmatches />
    </Layout>
)

export default Index