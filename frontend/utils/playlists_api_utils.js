export const createNewPlaylist = (playlist) =>
    $.ajax({
        url: "/api/playlists",
        method: "POST",
        data: { playlist },
    });

export const updatePlaylist = (playlist) =>
    $.ajax({
        url: `/api/playlists/${playlist.id}`,
        method: "PATCH",
        data: { title: playlist.title },
    });

export const deletePlaylist = (playlistId) =>
    $.ajax({
        url: `/api/playlists/${playlistId}`,
        method: "DELETE",
    });

export const getUserPlaylists = () =>
    $.ajax({
        url: `/api/playlists`,
        method: "GET",
    });

export const getPlaylistDetails = (playlistId) =>
    $.ajax({
        url: `/api/playlists/${playlistId}`,
        method: "GET",
    });

export const addTrackToPlaylist = (trackId, playlistId) =>
    $.ajax({
        url: `/api/playlists/${playlistId}/tracks/${trackId}`,
        method: "POST",
    });

export const removeTrackFromPlaylist = (trackId, playlistId) =>
    $.ajax({
        url: `/api/playlists/${playlistId}/tracks/${trackId}`,
        method: "DELETE",
    });
