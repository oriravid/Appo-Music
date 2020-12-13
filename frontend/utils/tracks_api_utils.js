export const getAlbumTracks = (albumId) =>
    $.ajax({
        url: `/api/albums/${albumId}/tracks`,
        method: "GET",
    });

export const increasePlayCount = (trackId) =>
    $.ajax({
        url: `/api/tracks/${trackId}`,
        method: "PATCH",
    });
