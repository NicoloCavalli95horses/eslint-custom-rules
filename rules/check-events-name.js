// ============
// Import
// ============
const { findClosestString } = require('../utils/generic');

// ============
// Consts
// ============
const validEventNames = [
  "abort", "afterprint", "animationend", "animationiteration", "animationstart",
  "beforeprint", "beforeunload", "blur", "canplay", "canplaythrough", "change",
  "click", "contextmenu", "copy", "cut", "dblclick", "drag", "dragend", "dragenter",
  "dragexit", "dragleave", "dragover", "dragstart", "drop", "durationchange", "ended",
  "error", "focus", "focusin", "focusout", "fullscreenchange", "fullscreenerror",
  "hashchange", "input", "invalid", "keydown", "keypress", "keyup", "load",
  "loadeddata", "loadedmetadata", "loadstart", "message", "mousedown", "mouseenter",
  "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "offline", "online",
  "open", "pagehide", "pageshow", "paste", "pause", "play", "playing", "popstate",
  "progress", "ratechange", "resize", "reset", "scroll", "search", "seeked", "seeking",
  "select", "show", "stalled", "storage", "submit", "suspend", "timeupdate", "toggle",
  "touchcancel", "touchend", "touchmove", "touchstart", "transitionend", "unload",
  "volumechange", "waiting", "wheel"
];

// ============
// Export
// ============
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Detects typos in event names passed to addEventListener.",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        const callee = node.callee;
        if ( callee.type === "MemberExpression" && callee.property && callee.property.name === "addEventListener" ) {
          const args = node.arguments;

          if (args && args.length > 0 && args[0].type === "Literal" && args[0].value.length) {
            const evName = args[0].value;

            if (!validEventNames.includes(evName)) {
              const closestEvName = findClosestString(evName, validEventNames);
              context.report({
                node: args[0],
                message: `${evName} is not a valid event name`,
                fix(fixer) {
                  return fixer.replaceText(args[0], `"${closestEvName}"`);
                }
              });
            }
          }
        }
      },
    };
  },
};