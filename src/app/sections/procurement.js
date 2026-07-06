import { CalendarDays, CircleCheck, Warehouse } from "lucide-react";

export const ProcurementSection = () => {
  const procurements = [
    {
      icon: <Warehouse />,
      heading: "Select Inventory",
      about: "Choose the quantities and bottle sizes that fit your volume.",
    },
    {
      icon: <CalendarDays />,
      heading: "Schedule Delivery",
      about: "Pick a delivery window that minimizes operatinal disruption.",
    },
    {
      icon: <CircleCheck  />,
      heading: "Confirm Reciept",
      about: "Palletized delivery to your dock with digital signature confirmation.",
    }
  ];

  return (
    <div >
      <h1>StreamLined Procurement</h1>
    </div>
  );
};
