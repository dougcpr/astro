type Lessons = {
  id?: number,
  created_at?: Date,
  title: string,
  description: string,
  level: Level,
  videoURL: string
}

enum Level {
  Elementary,
  Intermediate,
  Advanced
}

export type CourseData = {
  id?: number,
  created_at?: Date,
  title: string,
  description: string,
  startDate: string,
  endDate: string,
  level: string,
  rating: number,
  reviewerCount: number,
  lessons: Lessons[]
}