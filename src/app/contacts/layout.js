import { MenuLink } from "@/component/menu-link";
import styles from "./layout.module.css";
import { CONTACTS_MOCK } from "../../../mock/contacts";
import Contacts from "./page";
import { Menu } from "@/component/menu";

export default function ContactLayout({ children }) {
  return (
    <div className={styles.Layout}>
      <aside className={styles.Sidebar}>
        <h4 className={styles.Subtitle}>Links</h4>
        <Menu>
          <MenuLink href="/contacts/birthday">🎂 Birthdays</MenuLink>
        </Menu>

        <h4 className={styles.Subtitle}>Links</h4>
        <Menu className={styles.Menu}>
          {CONTACTS_MOCK.map((contact) => (
            <MenuLink key={contact.id} href={`/contacts/${contact.id}`}>
              <div className={styles.Card}>
                <img src={contact.avatarUrl} />
                {contact.firstName} {contact.lastName}
              </div>
            </MenuLink>
          ))}
        </Menu>
      </aside>

      {children}
    </div>
  );
}
