import Link from "next/link";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Github() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href="https://github.com/SofRahmani/qrcode" target="_blank">
            <Button variant="ghost" size="icon">
              <GithubIcon className="size-[1.2rem]" />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Voir le code source</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
}
