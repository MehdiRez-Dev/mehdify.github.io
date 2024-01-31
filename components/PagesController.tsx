import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

function PagesController() {
  return (
    <nav className="flex justify-between items-center h-[60px] px-4 py-2 border-b border-border">
      <ModeToggle />
      <div className="flex gap-2 h-[30px] items-center ">
        <LinkButton label="Home" />
        <LinkButton label="Bio" />
        <LinkButton label="Background" />
        <LinkButton label="Expertise" />
        <LinkButton label="Web App" />
        <LinkButton label="Web Site" />
        <LinkButton label="Contact" />
      </div>
    </nav>
  );
}

export default PagesController;

function LinkButton({ label }: { label: string }) {
  return (
    <Button variant={"link"}>
      <Link href={`#${label.replaceAll(" ", "")}`}>{label}</Link>
    </Button>
  );
}
