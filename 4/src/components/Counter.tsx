import { useState } from "react";
// Чтобы использовать css, sass и пр. файлы стилей, нужно подключить лоадер
// для простого css - css-loader, для scss - sass-loader
import "./Counter.scss";
// https://webpack.js.org/loaders/style-loader/
// https://webpack.js.org/loaders/css-loader/
// https://webpack.js.org/loaders/sass-loader/
/**
 * Устанавливаем все зависимости по доке и далее в файле
 * buildLoader.ts добавляем эти лоадеры в правильной последовательности.
 * Сначала style-loader, потом css-loader и в конце sass-loader
 */

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={increment}>{count}</button>
        </div>
    );
};

export default Counter;
