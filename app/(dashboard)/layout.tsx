import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar";

type DashboardLayoutProps = {
    children: React.ReactNode;
  };

  const DashboardLayout = ({ children }: DashboardLayoutProps): JSX.Element => {
  return (
    <div className='h-full relative'>
        <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900'>
            <Sidebar />
        </div>
        <main className='md:pl-72'>
            <Navbar />
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout