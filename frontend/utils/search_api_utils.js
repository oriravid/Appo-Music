export const runSearch = (searchQuery) =>
    $.ajax({
        url: "/api/search",
        method: "GET",
        data: { searchQuery },
    });
