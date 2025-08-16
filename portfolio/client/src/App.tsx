import { Switch, Route } from "wouter";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";


function App() {
  return (
    <ThemeProvider>
        <Route path="/" component={Home}/>
    </ThemeProvider>
  );
}

export default App;
