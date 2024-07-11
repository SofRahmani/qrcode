import Link from 'next/link'
import { Button } from '../ui/button'
import { GithubIcon } from 'lucide-react'


export default function Github() {
  return (
    <Link href="https://github.com/SofRahmani" target="_blank">
      <Button variant="ghost" size="icon">
        <GithubIcon className="size-[1.2rem]" />
      </Button>
    </Link>
  );
}