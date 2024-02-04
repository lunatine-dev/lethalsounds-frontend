import { writable } from "svelte/store";
import { browser } from "$app/environment";

export default (name) => {
    const current = browser && localStorage.getItem(name) === "true";

    if (browser) {
        localStorage.setItem(name, current);
    }

    const enabled = writable(current);

    enabled.subscribe((val) => {
        if (browser) {
            return localStorage.setItem(name, val.toString());
        }
    });

    return enabled;
};
