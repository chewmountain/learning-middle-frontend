// TypeScript ругается, что не добавлен импорт:
// import React from "react";
// Но это не норма. Нужно добавить изменения в tsconfig.json

import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";

const root = createRoot(document.getElementById("root"));

root.render(
    <div>
        <Counter />
    </div>
);
