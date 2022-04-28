import React from 'react'
import Home from "./pages/Home/Home";
// import Page1 from "./pages/page1/Page1";
import About from "./pages/about/About";
import Page2 from "./pages/page2/Page2";
// import Page3 from "./pages/page3/Page3";
import Page4 from "./pages/page4/Page4";
import Page5 from "./pages/page5/Page5";
import Page6 from "./pages/page6/Page6";
import Page7 from "./pages/page7/Page7";
import History from "./pages/history/History";
import History2 from "./pages/history2/History2";
import Page8 from "./pages/page8/Page8";
import Page9 from "./pages/page9/Page9";
import Page10 from "./pages/page10/Page10";
import Page11 from "./pages/page11/Page11";
// import Page12 from "./pages/page12/Page12";
import LSES from "./pages/LSES/LSES";
import Page13 from "./pages/page13/Page13";
import Page14 from "./pages/page14/Page14";
import Page15 from "./pages/page15/Page15";
import Page16 from "./pages/page16/Page16";
import WhatWeBelieve from "./pages/whatWeBelieve/WhatWeBelieve";
import TheNational from "./pages/theNational/TheNational";
import PastPfn from "./pages/pastPfn/PastPfn";
import page10 from ''

import { useLocation, Switch, Route } from 'react-router-dom'

const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <Switch key={location.pathname}>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/page2' component={Page2} />
          <Route exact path='/what-we-believe' component={WhatWeBelieve} />
          <Route exact path='/the-national' component={TheNational} />
          <Route exact path='/past-pfn-chairmen' component={PastPfn} />
          <Route exact path='/page5' component={Page5} />
          <Route exact path='/page6' component={Page6} />
          <Route exact path='/history' component={History} />
          <Route exact path='/history2' component={History2} />
          <Route exact path='/page8' component={Page8} />
          <Route exact path='/page9' component={Page9} />
          <Route exact path='/page10' component={Page10} />
          <Route exact path='/page11' component={Page11} />
          <Route exact path='/lses' component={LSES} />
          <Route exact path='/page13' component={Page13} />
          <Route exact path='/page14' component={Page14} />
          <Route exact path='/page15' component={Page15} />
          <Route exact path='/page16' component={Page16} />
        </Switch>
  )
}

export default AnimatedRoutes