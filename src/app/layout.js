import { MenuLink } from "@/component/menu-link";
import "./globals.css";
import styles from "./layout.module.css";
import { Menu } from "@/component/menu";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.Layout}>
          <header className={styles.Header}>
            <h1 className={styles.Logo}>My Contact</h1>
            <Menu>
              <MenuLink href="/about">About</MenuLink>
              <MenuLink href="/contacts">Contact</MenuLink>
            </Menu>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
