import SessionModel from './Session';
import { createModel } from 'schemix';
import cuidmixin from '../mixins/cuid.mixin';
import { datetimeParanoid } from '../mixins/datetime.mixin';
import RolesModel from './Roles';
import NotificationModel from './Notification';

export default createModel((User) => {
  User
    .mixin(cuidmixin)
    .string("name")
    .string("email", { unique: true })
    .string("password")
    .string("imageURL", { optional: true, raw: "@database.Text" })
    .string("roleId", { optional: true })
    .string("OTP", { optional: true })
    .relation("session", SessionModel, { name: 'sessionToUser', optional: true })
    .relation("role", RolesModel, { name: "userToRole", fields: ["roleId"], references: ["id"], onDelete: 'Cascade', optional: true })
    .relation("notification", NotificationModel, { name: 'userToNotification', list: true })
    .mixin(datetimeParanoid)
    .map({ name: "users" });
});