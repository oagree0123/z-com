type HomeLayoutProps = {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <p>홈 레이아웃</p>
      {children}
    </div>
  )
}