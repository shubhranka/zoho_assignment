export const localSaver = (store) => (next) => (action) => {
    localStorage.setItem("zoho_assignment_redux_state", JSON.stringify(store.getState()));
    next(action);
}