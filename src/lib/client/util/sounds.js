import { Howl } from "howler";

let volume = 0.35;

export const ButtonOpen = new Howl({ src: ["/sounds/Button2.wav"], volume });
export const ButtonClose = new Howl({ src: ["/sounds/Button3.wav"], volume });
export const Keys = Array.from(
    { length: 8 },
    (_, i) => new Howl({ src: [`/sounds/Key${i + 1}.wav`], volume })
);
