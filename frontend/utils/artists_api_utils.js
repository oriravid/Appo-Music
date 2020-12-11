export const getArtistDetails = (artistId) =>
    $.ajax({
        url: `/api/artists/${artistId}`,
        method: "GET",
    });
