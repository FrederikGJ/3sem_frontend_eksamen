import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

export function Menus() {
  return (
    <>
      <div className="sidebar">
        <Sidebar>
          <div className="menu">
            <Menu>
              <MenuItem href="/necklace"> Halskæde </MenuItem>
              <MenuItem href="/choker"> Choker </MenuItem>
              <MenuItem href="/earrings"> Øreringe </MenuItem>
              <MenuItem href="/bracelet"> Armbånd </MenuItem>
            </Menu>
          </div>
        </Sidebar>
      </div>
    </>
  );
}
