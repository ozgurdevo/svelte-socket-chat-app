import { writable } from "svelte/store";

const createItems = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    updateUserStatus: (nickname, color, status) =>
      update((list) => [...list, { nickname, color, status }]),
    addNewMessage: (sender, color, message) =>
      update((list) => [...list, { sender, color, message }]),
    reset: () => set([]),
  };
};

const createSocketId = () => {
  const { subscribe, set } = writable(undefined);

  return {
    subscribe,
    setSocketId: (id) => set(id),
    reset: () => set(undefined),
  };
};

const items = createItems();
const socketId = createSocketId();

export { items, socketId };
