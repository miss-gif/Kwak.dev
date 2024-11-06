const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-screen-xl m-auto px-4">
      {children}
    </div>
  )
}

export default Container
