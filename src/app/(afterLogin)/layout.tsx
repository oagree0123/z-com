type AfterLoginLayoutProps = {
  children: React.ReactNode;
}

export default function AfterLoginLayout({ children }: AfterLoginLayoutProps) {
  return (
    <div>
      애프터 로그인 레이아웃
      {children}
    </div>
  );
}