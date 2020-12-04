export const postPlaylist = (playlist) =>
    $.ajax({
        url: "/api/playlists",
        method: "POST",
        data: { playlist },
    });

export const patchPlaylist = (playlist) =>
    $.ajax({
        url: `/api/playlists/${playlist.id}`,
        method: "PATCH",
        data: { playlist },
    });

export const getSinglePlaylist = (id) =>
    $.ajax({
        url: `/api/playlists/${id}`,
        method: "GET",
    });

export const getAllPlaylists = () =>
    $.ajax({
        url: "/api/playlists",
        method: "GET",
    });

export const deleteSinglePlaylist = (id) =>
    $.ajax({
        url: `/api/playlists/${id}`,
        method: "DELETE",
    });
