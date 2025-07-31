import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zM15 30h-5v-5h5v5zm0-10h-5v-5h5v5zm0-10h-5V5h5v5zm10 20h-5v-5h5v5zm0-10h-5v-5h5v5zm0-10h-5V5h5v5zm10 20h-5v-5h5v5zm0-10h-5v-5h5v5zm0-10h-5V5h5v5z"/>
      </svg>
    ),
    title: "📘 Accounting",
    paragraph:
      "Gain full visibility into your finances with smart invoicing, double-entry accounting, expense tracking, budgeting, and real-time reporting. Plan financial goals and manage your cash flow with ease.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 10c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
        <path d="M36 18h-4c-1.1-4.2-4.8-7.9-9-9V5c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v4c-4.2 1.1-7.9 4.8-9 9H0c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 4.2 4.8 7.9 9 9v4c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4c4.2-1.1 7.9-4.8 9-9h4c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2z"/>
      </svg>
    ),
    title: "👨‍💼 HRM",
    paragraph:
      "Handle employee data, payroll, leaves, appraisals, recruitment, and training – all in one place. Automate HR workflows and generate reports effortlessly.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M35 5H5C2.2 5 0 7.2 0 10v20c0 2.8 2.2 5 5 5h30c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zM5 10h30v5H5v-5zm0 20v-10h30v10H5z"/>
        <path d="M10 25h5v5h-5v-5zm10 0h15v2H20v-2zm0 3h10v2H20v-2z"/>
      </svg>
    ),
    title: "📈 CRM",
    paragraph:
      "Track leads, manage deals, and streamline customer relationships. Use pipelines, custom forms, and contracts to boost your sales efficiency.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M35 0H5C2.2 0 0 2.2 0 5v30c0 2.8 2.2 5 5 5h30c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM15 30H5V20h10v10zm0-15H5V5h10v10zm20 15H20V20h15v10zm0-15H20V5h15v10z"/>
        <circle cx="10" cy="10" r="2"/>
        <circle cx="27.5" cy="10" r="2"/>
        <circle cx="10" cy="25" r="2"/>
        <circle cx="27.5" cy="25" r="2"/>
      </svg>
    ),
    title: "🧩 Projects",
    paragraph:
      "Manage tasks, milestones, timesheets, bugs, and reports with a robust project dashboard. Visualize timelines with Gantt charts and stay in control.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M35 10H25V5c0-2.8-2.2-5-5-5s-5 2.2-5 5v5H5c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h30c2.8 0 5-2.2 5-5V15c0-2.8-2.2-5-5-5zM20 5c0-.6.4-1 1-1s1 .4 1 1v5h-2V5zm15 30H5V15h30v20z"/>
        <rect x="10" y="20" width="5" height="5"/>
        <rect x="17.5" y="20" width="5" height="5"/>
        <rect x="25" y="20" width="5" height="5"/>
      </svg>
    ),
    title: "🛍️ POS & Inventory",
    paragraph:
      "Oversee warehouses, purchases, transfers, and sales points. Generate barcodes and quotations directly from the POS system. Ideal for retail and multi-location businesses.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <circle cx="20" cy="12" r="8"/>
        <path d="M20 25c-8.3 0-15 6.7-15 15h30c0-8.3-6.7-15-15-15z"/>
        <circle cx="32" cy="8" r="6"/>
        <path d="M32 18c-4.4 0-8 3.6-8 8h16c0-4.4-3.6-8-8-8z"/>
      </svg>
    ),
    title: "🧑‍💻 User & Role Management",
    paragraph:
      "Define roles and permissions, add clients or internal users, and keep track of activities using detailed logs.",
  },
  {
    id: 7,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M35 5H5C2.2 5 0 7.2 0 10v20c0 2.8 2.2 5 5 5h30c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zM35 30H5V15h30v15zM35 10H5V10h30z"/>
        <rect x="10" y="20" width="8" height="2"/>
        <rect x="10" y="24" width="6" height="2"/>
        <circle cx="30" cy="22" r="3"/>
      </svg>
    ),
    title: "🛒 Product Management",
    paragraph:
      "Maintain product catalogs and manage inventory with import/export features, stock monitoring, and reporting.",
  },
  {
    id: 8,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm8 25h-6v6c0 1.1-.9 2-2 2s-2-.9-2-2v-6h-6c-1.1 0-2-.9-2-2s.9-2 2-2h6v-6c0-1.1.9-2 2-2s2 .9 2 2v6h6c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
        <circle cx="30" cy="10" r="8" fill="red"/>
        <text x="30" y="15" textAnchor="middle" fill="white" fontSize="8">!</text>
      </svg>
    ),
    title: "🎧 Support System",
    paragraph:
      "Manage support tickets with list and grid views, ticket status filters, and reply/edit functionality to provide exceptional customer service.",
  },
  {
    id: 9,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect x="5" y="5" width="30" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3"/>
        <circle cx="28" cy="12" r="3"/>
        <path d="M10 25h20v10H10z"/>
        <rect x="15" y="30" width="10" height="2"/>
        <rect x="12" y="33" width="16" height="2"/>
      </svg>
    ),
    title: "📞 Zoom & Messenger Integration",
    paragraph:
      "Schedule, view, and manage Zoom meetings from inside ERPGo. Collaborate using the built-in messenger for real-time communication.",
  },
  {
    id: 10,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm8 28l-8-6-8 6V12c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v16z"/>
        <circle cx="30" cy="10" r="6" fill="red"/>
        <text x="30" y="14" textAnchor="middle" fill="white" fontSize="6">!</text>
      </svg>
    ),
    title: "🔔 Smart Notifications",
    paragraph:
      "Get automated alerts for new leads, invoices, payments, tasks, events, announcements, and more – customizable for your workflow.",
  },
  {
    id: 11,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect x="0" y="0" width="40" height="40" rx="4"/>
        <rect x="5" y="5" width="30" height="6" rx="1" fill="white"/>
        <rect x="5" y="15" width="14" height="20" rx="1" fill="white"/>
        <rect x="21" y="15" width="14" height="9" rx="1" fill="white"/>
        <rect x="21" y="26" width="14" height="9" rx="1" fill="white"/>
        <circle cx="32" cy="8" r="3" fill="gold"/>
      </svg>
    ),
    title: "⚙️ Super Admin Dashboard",
    paragraph:
      "Create plans, manage users, handle subscriptions, generate landing pages, configure branding, payment gateways, and email templates.",
  },
];

export default featuresData;