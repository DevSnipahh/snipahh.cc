import { Switch, Route } from "wouter";
// Removed backend dependencies
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Login from "@/pages/Login";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/scripts" component={Projects} />
      <Route path="/premium" component={Services} />
      <Route path="/custom" component={Services} />
      <Route path="/support" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
