"use client";

import React from "react";
import { COURSES, COURSE_CATEGORIES } from "@/app/data/courses";
import { CourseCard } from "@/components/course-card";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export default function KursusPageClient() {
  const [selectedCategory, setSelectedCategory] = React.useState("Semua");

  const filteredCourses =
    selectedCategory === "Semua"
      ? COURSES
      : COURSES.filter((course) => course.category === selectedCategory);

  return (
    <Container className="pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-20">
      <PageHeader
        eyebrow="01 — Katalog"
        title="Semua kursus"
        description="Pilih dari berbagai kursus yang dirancang untuk membantu kamu tumbuh — ringkas, praktis, dan langsung bisa dipakai."
      />

      {/* Filter kategori — tab bergaris bawah, bisa digeser di layar kecil */}
      <div className="mb-8 sm:mb-12">
        <div className="flex gap-x-6 overflow-x-auto border-b border-border sm:gap-x-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {COURSE_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={active}
                className={`shrink-0 whitespace-nowrap border-b-2 py-3 text-meta font-semibold uppercase tracking-label transition-colors ${
                  active
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-between text-micro font-semibold uppercase tracking-label text-muted-foreground sm:mt-4">
          <span>{filteredCourses.length} kursus</span>
          <span className="hidden sm:inline">Katalog 2026</span>
        </div>
      </div>

      {/* Daftar kursus */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="border-y border-border py-16 text-center sm:py-24">
          <p className="text-balance font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Belum ada kursus di kategori ini
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Coba pilih kategori lain atau lihat seluruh katalog.
          </p>
        </div>
      )}
    </Container>
  );
}
