import EmbedApp from "./EmbedApp";
import { PasswordGate } from "@/components/PasswordGate";

export default function EmbedPage() {
  return (
    <PasswordGate>
      <EmbedApp />
    </PasswordGate>
  );
}
