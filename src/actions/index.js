export const CHOOSE_USER = 'CHOOSE_USER'

export const chooseUser = (userSelected) => {
    return {
        type: CHOOSE_USER,
        payload: userSelected
    }

}