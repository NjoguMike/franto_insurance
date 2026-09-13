
type ServiceTab = "Medical" | "Investment" | "Pension" | "Insurance" | "Education";

function ServicesTabs({ activeTab, onTabClick }: { activeTab: ServiceTab | null; onTabClick: (tab: ServiceTab) => void }) {

  const tabs: ServiceTab[] = ['Medical', 'Investment', 'Pension', 'Insurance', 'Education'];

  const handleTabClick = (tab: ServiceTab) => {
    onTabClick(tab);
  }

  return (
    <div className="flex flex-wrap gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
            activeTab === tab
              ? "bg-[var(--primary)] text-white shadow-lg"
              : "bg-[var(--secondary)]/20 text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default ServicesTabs