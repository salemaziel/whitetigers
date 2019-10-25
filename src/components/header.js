import React from 'react'

import Sitemobilemenu from './wt/sitemobilemenu'
import Sitenavbarheader from './wt/sitenavbarheader'


import '../css/style.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'
import '../css/bootstrap.min.css'


const Header = () => (
    <div>
        <Sitemobilemenu />
        <Sitenavbarheader />
    </div>
)

export default Header