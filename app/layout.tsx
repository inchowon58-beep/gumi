import type { Metadata } from "next";
import {
  getStructuredData,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gumi.cattery.co.kr"),
  title: "구미강아지파양 | 구미강아지파양 전문 안내",
  description: "구미강아지파양·구미강아지파양 전문 상담센터입니다. 보호소 연계, 입양·파양 안내. 전화 0505-707-0401",
  keywords: ["gumi.cattery.co.kr"],
  authors: [{ name: "gumi.cattery.co.kr" }],
  creator: "gumi.cattery.co.kr",
  publisher: "gumi.cattery.co.kr",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://gumi.cattery.co.kr",
    siteName: "gumi.cattery.co.kr",
    title: "구미강아지파양 | 구미강아지파양 전문 안내",
    description: "구미강아지파양·구미강아지파양 전문 상담센터입니다. 보호소 연계, 입양·파양 안내. 전화 0505-707-0401",
    images: [{ url: "/images/landing-01.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "구미강아지파양 | 구미강아지파양 전문 안내",
    description: "구미강아지파양·구미강아지파양 전문 상담센터입니다. 보호소 연계, 입양·파양 안내. 전화 0505-707-0401",
    images: ["/images/landing-01.jpg"],
  },
  alternates: {
    canonical: "https://gumi.cattery.co.kr",
  },
  category: "gumi.cattery.co.kr",
  verification: {
    other: {
      "naver-site-verification": "bed99ced81850ccf1dc1b508cdeb6393eb2f9975",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredData();

  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="bed99ced81850ccf1dc1b508cdeb6393eb2f9975" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans pb-safe-floating lg:pb-0">{children}</body>
    </html>
  );
}
