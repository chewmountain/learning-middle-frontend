/**
 * Эта функция призвана удобно комбинировать классы,
 * особенно, если они навешиваются по какому-либо условию
 */

/**
 * Про тайпскриптовый тип Record<Keys, Type>
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
 * В нашем случае в качестве ключа будет использоваться string, а в качестве значения
 * boolean или string
 */
type Mods = Record<string, boolean | string>;
// Например:
// const obj: Mods = {
//     'hovered': true
// }

// cls - class names сокр.

export function classNames(
    cls: string,
    mods: Mods,
    additional: string[]
): string {
    return [
        cls,
        ...additional,
        // Получаем те ключи, которые имеют значение true и их же будем добавлять как классы
        Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(" ");
}

// classNames('remove-btn', {hovered: true, selectable: true, red: true}, ['withPaddings'])
// 'remove-btn hovered selectable red withPaddings'
