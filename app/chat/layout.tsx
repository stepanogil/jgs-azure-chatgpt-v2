import { ProtectedPage } from "@/features/auth/protected-page";
import { ChatMenu } from "@/features/chat/chat-menu/chat-menu";
import { MainMenu } from "@/features/menu/menu";

export const metadata = {
  title: "JGS GPT",
  description: "JGS GPT",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedPage>
      <MainMenu />
      <ChatMenu />
      <div className="flex-1">{children}</div>
    </ProtectedPage>
  );
}
