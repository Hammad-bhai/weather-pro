import { createContext, ReactNode, useState } from "react";

export interface T {
    query: string;
    setQuery: (value: string) => void;
}

export type All = { children: ReactNode }

export const SearchContext = createContext<T | null>(null)

export const SearchProvider = ({ children }: All) => {
    const [query, setQuery] = useState<string>('karachi')


    return (
        <SearchContext.Provider value={{query, setQuery}}>
            {children}
        </SearchContext.Provider>
    )
}