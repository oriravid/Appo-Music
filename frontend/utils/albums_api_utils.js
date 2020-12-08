export const getAllAlbums = () =>
    $.ajax({
        url: "/api/albums/",
        method: "GET",
    });

export const getUserAlbums = (userId) =>
    $.ajax({
        url: `/api/albums/`,
        method: "GET",
        data: { user_id: userId },
    });
