import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import "./index.scss";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";

const App = () => {
    return (
        <div className="app">
            <Link to={"/"}>Главная страница</Link>
            <br />
            <Link to={"/about"}>О нас</Link>

            {/* Компонент Suspence должен обязательно 
            использоваться вместе с React.lazy()
            Он оборачивает компонент и будет отображать, напр., информацию о загрузке. */}
            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy />} />
                    <Route path="/about" element={<AboutPageLazy />} />
                </Routes>
            </Suspense>

            <Counter />
        </div>
    );
};

export default App;
