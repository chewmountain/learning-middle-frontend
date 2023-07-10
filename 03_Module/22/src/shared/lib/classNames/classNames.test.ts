import { classNames } from "./classNames";

/**
 * Тестовая среда. Настройка Jest. Первый тест
 * https://jestjs.io/docs/getting-started
 * npx jest --init (для создания конфигурационного файла)
 * jest.config.ts
 * В package.json запускаем jest с флагом --config и указываем путь до конфига (если мы его выносим в папку отличную от корневой)
 */

describe("classNames testing", () => {
    test("One class", () => {
        expect(classNames("main-class", {}, [])).toBe("main-class");
    });

    test("One class and mod's", () => {
        expect(
            classNames("main-class", { active: true, scrollable: false }, [])
        ).toBe("main-class active");
    });

    test("Main class, mod's and additional", () => {
        expect(
            classNames("main-class", { active: true }, ["additional", "hello"])
        ).toBe("main-class additional hello active");
    });

    test("Without classes", () => {
        expect(classNames("", {}, [])).toBe("");
    });

    test("Undefined mod", () => {
        expect(classNames("main-class", { active: undefined }, [])).toBe(
            "main-class"
        );
    });
});
