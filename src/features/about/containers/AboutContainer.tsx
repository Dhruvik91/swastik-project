"use client"

import { AboutHero } from '../components/AboutHero';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { CompanyValueCard } from '../components/CompanyValueCard';
import { TimelineEvent } from '../components/TimelineEvent';
import { OfficeLocationCard } from '../components/OfficeLocationCard';
import {
  aboutHero,
  teamMembers,
  companyValues,
  timelineEvents,
  officeLocations,
} from '../constants/about.data';

export const AboutContainer = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHero data={aboutHero} />

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <CompanyValueCard key={value.id} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our company&apos;s history
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.id}
                event={event}
                index={index}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at our global locations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {officeLocations.map((location, index) => (
              <OfficeLocationCard key={location.id} location={location} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; 