export const toggleSetting = (setting) =>
    $.ajax({
        url: `/api/user_settings/`,
        method: "PATCH",
        data: { setting },
    });
