export const increasePlayCount = (trackId) =>
    $.ajax({
        url: `/api/tracks/${trackId}`,
        method: "PATCH",
    });
