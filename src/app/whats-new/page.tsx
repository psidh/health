import React from "react"
import { Icon } from "@mui/material" // For Material Icons

const WhatsNew = () => {
  const updates = [
    {
      title: "New Dashboard UI",
      date: "October 2024",
      description:
        "The dashboard has been redesigned with a more intuitive layout and new analytics widgets.",
      icon: "dashboard",
      category: "UI",
    },
    {
      title: "Performance Improvements",
      date: "September 2024",
      description:
        "We’ve improved the app's performance, resulting in faster load times and smoother interactions.",
      icon: "speed",
      category: "Performance",
    },
    {
      title: "Dark Mode Support",
      date: "August 2024",
      description:
        "Dark mode is now available! You can enable it in the settings for a better low-light experience.",
      icon: "dark_mode",
      category: "Settings",
    },
  ]

  return (
    <div className="pt-24 text-on-surface">
      {/* Header */}
      <header className="p-6 border-b border-neutral-200">
        <h1 className="text-4xl font-bold">What's New</h1>
      </header>

      {/* Main Content */}
      <main className="py-12 px-8 md:px-36 space-y-8">
        {updates.map((update, index) => (
          <div
            key={index}
            className="rounded-lg border border-neutral-200 bg-surface p-6 hover:bg-surface-variant transition-all"
          >
            {/* Icon & Title */}
            <div className="flex items-center space-x-4">
              <Icon className="text-primary text-5xl">{update.icon}</Icon>
              <div>
                <h2 className="text-2xl font-bold text-on-surface">
                  {update.title}
                </h2>
                <p className="text-sm text-on-surface-variant">{update.date}</p>
              </div>
            </div>
            {/* Description */}
            <p className="mt-4 text-base text-on-surface">
              {update.description}
            </p>

            {/* Category Chip */}
            <div className="mt-6">
              <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-medium">
                {update.category}
              </span>
            </div>
          </div>
        ))}

        {/* Footer - Call to Action */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-full bg-primary text-on-primary font-medium hover:bg-primary-variant transition-all">
            Learn More
          </button>
        </div>
      </main>
    </div>
  )
}

export default WhatsNew
