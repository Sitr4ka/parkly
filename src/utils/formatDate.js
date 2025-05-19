export const formatDate=(d)=>{
    // const dateStr = "2025-05-19T05:00:00.000Z";
    const date = new Date(d);

    const options = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

return  date.toLocaleString("en-fr", options);


} 