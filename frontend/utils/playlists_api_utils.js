export const getUserPlaylists = (userId) =>
    $.ajax({
        url: `/api/users/${userId}/playlists`,
        method: "GET",
    });

export const createNewPlaylist = (playlist) =>
    $.ajax({
        url: "/api/playlists",
        method: "POST",
        data: { playlist },
    });

// export const patchPlaylist = (playlist) =>
//     $.ajax({
//         url: `/api/playlists/${playlist.id}`,
//         method: "PATCH",
//         data: { playlist },
//     });

// export const getSinglePlaylist = (id) =>
//     $.ajax({
//         url: `/api/playlists/${id}`,
//         method: "GET",
//     });

// export const deleteSinglePlaylist = (id) =>
//     $.ajax({
//         url: `/api/playlists/${id}`,
//         method: "DELETE",
//     });
