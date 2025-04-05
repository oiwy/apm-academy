import { Router, Route } from "wouter-preact";

import { Home, Course, Courses } from "../pages";
import { useScrollToTop } from "../shared";
import { Header } from "../widgets";

export const App = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <Router>
        <main>
          <Route path="/" component={Home} />
          <Route path="/course/:id" component={Course} />
          <Route path="/courses" component={Courses} />
        </main>
      </Router>
    </>
  );
};
