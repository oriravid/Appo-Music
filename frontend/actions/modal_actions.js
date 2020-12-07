export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal) => ({
    type: OPEN_MODAL,
    modal: modal,
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});
