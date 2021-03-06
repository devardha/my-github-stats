export const basic = {
    textPrimary: '#2f80ed',
    textSecondary: '#333',
    background: '#fffefe',
    stroke: '#E4E2E2'
}

export const panda = {
    textPrimary: '#ff75b5',
    textSecondary: '#ffffff',
    background: '#292a2b',
    stroke: '#292a2b'
}

export const nightowl = {
    textPrimary: '#c792ea',
    textSecondary: '#ffffff',
    background: '#011627',
    stroke: '#011627'
}

export const getTheme = (theme: string) => {
    switch (theme) {
        case 'panda':
            return panda
        case 'nightowl':
            return nightowl
        default:
            return basic
    }
}