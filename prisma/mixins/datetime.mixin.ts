import { createMixin } from "schemix";

export const datetimemixin = createMixin((DateTimeMixin) => {
  DateTimeMixin
    .dateTime("createdAt", { default: { now: true } })
    .dateTime("updatedAt", { updatedAt: true });
});
export const datetimeParanoid = createMixin((DateTimeMixinParanoid) => {
  DateTimeMixinParanoid
    .dateTime("createdAt", { default: { now: true } })
    .dateTime("updatedAt", { updatedAt: true })
    .dateTime("deletedAt", { optional: true });
});
