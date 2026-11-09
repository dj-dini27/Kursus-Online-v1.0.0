import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/app/data/courses";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group flex flex-col">
      <Link
        href={`/kursus/${course.id}`}
        className="relative block overflow-hidden bg-accent"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            width={600}
            height={450}
            className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>
        <span className="absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-micro font-semibold uppercase tracking-label text-foreground">
          {course.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col border-b border-border pb-4 pt-4 sm:pb-5 sm:pt-5">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <h3 className="text-balance font-display text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
            <Link
              href={`/kursus/${course.id}`}
              className="transition-colors hover:text-primary"
            >
              {course.title}
            </Link>
          </h3>
          <span className="whitespace-nowrap pt-1 text-xs text-muted-foreground">
            ★ {course.rating}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {course.desc}
        </p>

        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <p className="text-micro font-semibold uppercase tracking-label text-muted-foreground">
              {course.level} · {course.duration}
            </p>
            <p className="mt-1.5 font-display text-lg text-foreground sm:text-xl">
              {course.price}
            </p>
          </div>
          <Link
            href={`/kursus/${course.id}`}
            className="text-meta font-semibold uppercase tracking-label text-foreground transition-colors hover:text-primary"
          >
            Lihat →
          </Link>
        </div>
      </div>
    </article>
  );
}
