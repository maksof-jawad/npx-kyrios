import { createModel } from 'schemix';
import cuidmixin from '../mixins/cuid.mixin';
import { datetimeParanoid } from '../mixins/datetime.mixin';
import UserModel from './User';

export default createModel((Notification) => {
  Notification
    .mixin(cuidmixin)
    .string("userId")
    .string("text")
    .boolean("read", { default: false })
    .mixin(datetimeParanoid)
    .relation("user", UserModel, { name: "userToNotification", fields: ["userId"], references: ["id"], onDelete: 'Cascade' })
    .map({ name: "notification" });
});