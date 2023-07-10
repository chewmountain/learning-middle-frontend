import { useEffect, useState } from "react";
import { Button } from "widgets/Navbar/ui/button";
/**
 * Это просто для того, чтобы выбросить ошибку и
 * протестировать обработчик ошибок
 */
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={onThrow}>Throw Error</Button>;
};
