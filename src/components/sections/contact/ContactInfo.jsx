import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";

import GlassCard from "../../ui/GlassCard";
import { contact } from "../../../data/contact";

const items = [
  {
    icon: Mail,
    title: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Phone,
    title: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: contact.location,
  },
];

export default function ContactInfo() {
  return (
    <GlassCard className="h-full p-8">

      <h3 className="mb-8 text-3xl font-bold">
        Contact Information
      </h3>

      <div className="space-y-6">

        {items.map((item) => {
          const Icon = item.icon;

          const content = (
            <div
              className="
                flex
                items-start
                gap-5
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                transition-all
                duration-300
                hover:border-blue-500
                hover:bg-blue-500/10
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                "
              >
                <Icon size={24} />
              </div>

              <div>
                <h4 className="font-semibold">
                  {item.title}
                </h4>

                <p className="mt-1 text-slate-400">
                  {item.value}
                </p>
              </div>
            </div>
          );

          return item.href ? (
            <a
              key={item.title}
              href={item.href}
            >
              {content}
            </a>
          ) : (
            <div key={item.title}>
              {content}
            </div>
          );
        })}

      </div>

     
    </GlassCard>
  );
}