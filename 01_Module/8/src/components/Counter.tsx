import { useState } from "react";
import styles from "./Counter.module.scss";
// https://webpack.js.org/loaders/css-loader/#modules
/**
 * Чтобы использовать [name].module.s/css, нужно произвести настройку.
 * В конфиге вебпака нужно просто включить modules.
 *
 * Далее нужно настроить глобальную декларацию типов,
 * чтобы ts понимал что мы хотим заимпортить из css файла.
 * Создаем файл gloabl.d.ts
 */

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button className={styles.btn} onClick={increment}>
                {count}
            </button>
        </div>
    );
};

export default Counter;
