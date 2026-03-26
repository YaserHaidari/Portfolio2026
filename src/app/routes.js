import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Cap } from "../pages/projects/cap";
import { Safelife } from "../pages/projects/safelife";
import { Music } from "../pages/projects/music";
import { Life } from "../pages/projects/life";
import { Camspot } from "../pages/projects/camspot";
import { Cmc } from "../pages/projects/cmc";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit>
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects/cap" element={<Cap />} />
        <Route path="/projects/safelife" element={<Safelife />} />
        <Route path="/projects/music" element={<Music />} />
        <Route path="/projects/life" element={<Life />} />
        <Route path="/projects/campspot" element={<Camspot />} />
        <Route path="/projects/cmc" element={<Cmc />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
