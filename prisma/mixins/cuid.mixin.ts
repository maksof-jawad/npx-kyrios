import { createMixin } from "schemix";

export default createMixin((CUIDMixin) => {
  CUIDMixin
    .string("id", { id: true, default: { cuid: true } });
});