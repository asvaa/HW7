// функция для сохранения объектов в память браузера
// (данные в этом хранилище сохраняются даже при перезагрузке компа)
export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}

// функция для получения сохранённого объекта из памяти браузера
export function restoreState<T>(key: string, defaultState: T): T {
    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    return state
}

// ---------------------------------------------------------------------------------------------------------------
// пример использования:

type StateType = {
    x: string
    y: number
}

saveState<StateType>('test', { x: 'A', y: 1 })

const state: StateType = restoreState<StateType>('test', { x: '', y: 0 })

console.log(state) // { x: 'A', y: 1 }
