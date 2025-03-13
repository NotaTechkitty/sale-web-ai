export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* This nav will be shared across all dashboard pages */}
      <nav>
        <ul>
          <li>Dashboard Home</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </nav>

      {children}
    </section>
  );
}
