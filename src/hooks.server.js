// import { authenticateUser } from "$lib/server/auth";
export const handle = async ({ event, resolve }) => {
    event.locals.user = {
        username: "astatine.moe",
        displayName: "zoey",
        avatar: "https://cdn.discordapp.com/avatars/161546204260466688/4fdd230472f86c99deb75addd8e838fc.webp?size=256",
    };
    return resolve(event);
};
