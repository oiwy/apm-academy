import { Router, Route } from "wouter-preact";

import {
  Home,
  Courses,
  Course,
  Oferta,
  Privacy,
  Checkout,
  Lessons,
} from "../pages";
import { useScrollToTop } from "../shared";
import { Header, Footer } from "../widgets";

export const App = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <Router>
        <main>
          <Route path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/oferta" component={Oferta} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/course/:id" component={Course} />
          <Route path="/checkout/:id" component={Checkout} />
        </main>
      </Router>
      <Footer />
    </>
  );
};
