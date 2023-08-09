import { delay } from "@/lib/delay";
import HeaderLink from "./HeaderLink";

const Header = async () => {
  await delay(3000);
  return (
    <div>
      Header
      <HeaderLink />
    </div>
  );
};

export default Header;
