import "./globals.css";

export const metadata = {
  title: "UYWNIX — AI Automation for Business",
  description: "AI chatbots, voice agents, and automation workflows for businesses. Deploy in minutes. Built on OpenClaw.",
  keywords: ["UYWNIX", "AI automation", "AI chatbot", "voice agent", "business automation", "OpenClaw"],
  openGraph: {
    title: "UYWNIX — AI Automation for Business",
    description: "AI chatbots, voice agents, and automation workflows. Deploy in minutes.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}