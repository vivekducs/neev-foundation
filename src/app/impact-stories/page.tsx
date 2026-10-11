"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Quote,
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Filter,
  UserCheck
} from "lucide-react";
import { Motion3DCard } from "@/components/Motion3DCard";
import { IMPACT_STORIES, ImpactStory } from "@/data/impactStoriesData";

export default function ImpactStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Youth Skilling", "Women Empowerment", "Child Welfare", "Environment"];

  const filteredStories = selectedCategory === "All"
    ? IMPACT_STORIES
    : IMPACT_STORIES.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-[#F3C623]/60 text-xs font-black text-[#EB8317] uppercase tracking-wider">
            <Heart className="w-4 h-4 text-[#F3C623]" />
            <span>Community Voice & Transformation Journeys</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A]">
            Impact Stories from the Grassroots
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-3xl leading-relaxed">
            Real transformations powered by meaningful action. In compliance with data dignity and privacy standards, beneficiary identities use verified pseudonyms and center tracking references.
          </p>
        </div>
      </section>

      {/* Stories Listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E2E8F0] pb-4">
          <span className="text-xs font-bold text-[#64748B] mr-2 flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-[#EB8317]" />
            Filter Theme:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-[#EB8317] text-[#FFFFFF] shadow-sm shadow-[#EB8317]/25"
                  : "bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] hover:bg-[#FFFFFF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stories Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredStories.map((story, idx) => (
              <Motion3DCard key={story.id} tiltAngle={12}>
                <div className="bg-[#FFFFFF] border-2 border-[#E2E8F0] hover:border-[#EB8317] rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 h-full transition-all">
                  <div className="space-y-4">
                    {/* Top Badges */}
                    <div className="flex justify-between items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-[#F8FAFC] text-[#EB8317] text-xs font-black border border-[#E2E8F0]">
                        {story.category}
                      </span>
                      <span className="text-xs text-[#EB8317] font-bold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#F3C623]" />
                        {story.location}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-snug">
                      {story.title}
                    </h2>

                    <div className="flex items-center gap-2 text-xs text-[#64748B] font-medium">
                      <UserCheck className="w-4 h-4 text-[#EB8317]" />
                      <span>{story.beneficiaryPseudonym}</span>
                      <span>•</span>
                      <span className="text-[#0F172A] font-bold">{story.centerRef}</span>
                    </div>

                    {/* Quote Block */}
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border-l-4 border-[#EB8317] space-y-2">
                      <Quote className="w-4 h-4 text-[#EB8317]" />
                      <p className="text-xs sm:text-sm text-[#334155] font-medium italic">
                        {story.quotePlaceholder}
                      </p>
                    </div>

                    {/* Challenge -> Intervention -> Outcome Breakdown */}
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                        <strong className="text-[#0F172A] block font-bold">Challenge Faced:</strong>
                        <p className="text-[#64748B]">{story.challenge}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                        <strong className="text-[#EB8317] block font-bold">Neev Foundation Intervention:</strong>
                        <p className="text-[#64748B]">{story.intervention}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#FFFFFF] border-2 border-[#F3C623] space-y-1">
                        <strong className="text-[#EB8317] block font-bold">Measurable Grassroots Outcome:</strong>
                        <p className="text-[#0F172A] font-bold">{story.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Tags */}
                  <div className="pt-2 border-t border-[#E2E8F0] flex flex-wrap gap-1.5">
                    {story.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Motion3DCard>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
