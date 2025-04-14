// сохраняет объект в localStorage
export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}

// получает объект из localStorage и преобразует в нужный тип
export function restoreState<T>(key: string, defaultState: T): T {
    const stateAsString = localStorage.getItem(key)
    return stateAsString ? JSON.parse(stateAsString) as T : defaultState
}
