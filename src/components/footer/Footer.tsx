import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-background p-4 text-center">
      <p>
        &copy;{" "}
        <a href="https://github.com/SofRahmani" target="_blank">
          <Button variant="link" size='link'>Sofiane Rahmani</Button>
        </a>{" "}
        - Tous droits réservées - {new Date().getFullYear()}
      </p>
    </footer>
  );
}
