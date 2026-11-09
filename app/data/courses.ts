export interface Course {
  id: string;
  title: string;
  desc: string;
  price: string;
  image: string;
  category: string;
  level: "Pemula" | "Menengah" | "Mahir";
  duration: string;
  rating: number;
  students: number;
}

export const COURSES: Course[] = [
  {
    id: "web-dev",
    title: "Web Development Modern",
    desc:
      "Belajar HTML, CSS, JavaScript dari nol sampai mahir dalam 8 minggu. Siap kerja sebagai Frontend Developer.",
    price: "Rp 150.000",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    category: "Pemrograman",
    level: "Pemula",
    duration: "8 Minggu",
    rating: 4.8,
    students: 1250,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    desc:
      "Rancang antarmuka yang menarik dan user-friendly dengan Figma dari nol sampai produksi.",
    price: "Rp 200.000",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    category: "Desain",
    level: "Pemula",
    duration: "6 Minggu",
    rating: 4.9,
    students: 980,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    desc:
      "Strategi pemasaran digital yang efektif untuk menaikkan jualan dan brand awareness.",
    price: "Rp 175.000",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    category: "Bisnis",
    level: "Menengah",
    duration: "4 Minggu",
    rating: 4.7,
    students: 2100,
  },
  {
    id: "data-science",
    title: "Data Science & AI",
    desc:
      "Analisis data dan pembelajaran mesin dengan Python dan AI untuk kebutuhan industri.",
    price: "Rp 250.000",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    category: "Data",
    level: "Mahir",
    duration: "10 Minggu",
    rating: 4.9,
    students: 750,
  },
];

export const COURSE_CATEGORIES = [
  "Semua",
  "Pemrograman",
  "Desain",
  "Bisnis",
  "Data",
] as const;
