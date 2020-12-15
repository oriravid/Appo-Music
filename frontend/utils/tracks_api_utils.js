export const increasePlayCount = (trackId) =>
    $.ajax({
        url: `/api/tracks/${trackId}`,
        method: "PATCH",
    });

export const saveTrack = (trackId) =>
    $.ajax({
        url: `/api/user_saves/`,
        method: "POST",
        data: { track_id: trackId },
    });

export const unsaveTrack = (trackId) =>
    $.ajax({
        url: `/api/user_saves/`,
        method: "DELETE",
        data: { track_id: trackId },
    });
