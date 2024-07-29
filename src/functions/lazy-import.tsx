import { ComponentType, lazy } from "react";

export default function lazyImport<
    T extends Record<S, ComponentType>,
    S extends string,
>(factory: () => Promise<T>, names: S[]): T {
    return Object.fromEntries([
        ...names.map((name) => [
            name,
            lazy(() => factory().then((module) => ({ default: module[name] }))),
        ]),
    ]);
}
