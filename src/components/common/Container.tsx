const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-screen-xl m-auto">
      {children}
    </div>
  )
}

export default Container
