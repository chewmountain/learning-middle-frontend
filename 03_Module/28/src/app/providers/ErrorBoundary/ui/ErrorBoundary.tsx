import { Component, ErrorInfo, ReactNode, Suspense } from "react";
import { PageError } from "widgets/PageError";

/**
 * В случае возникновения ошибки используем ErrorBoundary
 * https://legacy.reactjs.org/docs/error-boundaries.html
 */

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                /**
                 * Т.к. у нас в PageError есть переводы, мы его оборачиваем в Suspence
                 */
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

/**
 * Т.к. i18n создан для функциональных компонентов (использует хук useTranslation),
 * используем такой экспорт для классовых компонентов.
 * Но сделаем проще и будем возвращать здесь
 * функциональный компонент (shared/PageError)
 * export default withTranslation()(ErrorBoundary);
 */

/**
 * В корневом компонете (в index.tsx) оборачиваем все приложение в ErrorBoundary
 */

export default ErrorBoundary;
