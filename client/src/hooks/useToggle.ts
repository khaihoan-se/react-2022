import { useCallback, useState } from "react";

const useToggle = (initialState: boolean = false): [boolean, any] => {
    const [ state, setState ] = useState(initialState);

    const toggle = useCallback((): void => setState(!state), [ state ]);

    return [ state, toggle ];
}