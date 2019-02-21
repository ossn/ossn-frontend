/*
  Filters a keybard event.
  Filters the keyboard event for the 'Return' (Enter) button and optionally the
  space.
  Runs a callbackfunction if the filters are passed.

  params:
    event: An event object expected from the `onKeyDown` event.
    callback: A function that will be triggered if the filters are passed.
    acceptSpace: A flag to indicate if the 'space' button can trigger or not the
                  callback function.
*/
export const returnKeyCheck = (event, callback, acceptSpace = false) => {
  if (!event || !event.keyCode) return;
  if (typeof callback !== "function")
    throw new TypeError("callback is not a function", "accessibility.js", 13);
  if (event.keyCode === 13) callback();
  if (acceptSpace && event.keyCode === 32) callback();
};
