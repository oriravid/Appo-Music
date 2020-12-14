export const getAlbumTracks = (albumId) =>
    $.ajax({
        url: `/api/albums/${albumId}/tracks`,
        method: "GET",
    });

export const getSavedAlbumTracks = (albumId) =>
    $.ajax({
        url: `/api/albums/${albumId}/tracks`,
        method: "GET",
        data: { request_type: "user" },
    });

export const increasePlayCount = (trackId) =>
    $.ajax({
        url: `/api/tracks/${trackId}`,
        method: "PATCH",
    });
