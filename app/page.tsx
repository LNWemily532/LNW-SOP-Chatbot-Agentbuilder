import App from "./App";
import { PasswordGate } from "@/components/PasswordGate";

export default function Home() {
  return (
    <PasswordGate>
      <App />
    </PasswordGate>
  );
}
