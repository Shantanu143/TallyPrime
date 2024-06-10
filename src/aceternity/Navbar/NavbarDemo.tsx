import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu.tsx";
import { cn } from "../utils/cn.ts";
import tallyImg from "../../assets/TallyP.png";
import excelImg from "../../assets/excelImg.png";
import { Link } from "react-router-dom";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center dark">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink>
              <Link to="/about">About</Link>
            </HoveredLink>
            <HoveredLink href="/">
              <Link to="/placestudent">Placed Students</Link></HoveredLink>
            <HoveredLink href="/contact"><Link to="/contactus">Contact Us </Link></HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Cources">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Tally Prime"
              to="/tallyprime"
              src={tallyImg}
              description="Master Tally Prime with our Certificate Course."
            />
            <ProductItem
              title="Advanced Excel"
              to="/advanceexcel"
              src={excelImg}
              description="Unlock advanced Excel skills with our certification course."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Connect Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/signin"> <Link to="/signin">Sign In</Link></HoveredLink>
            <HoveredLink href="/signup"> <Link to="/signup">Sign Up</Link></HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
