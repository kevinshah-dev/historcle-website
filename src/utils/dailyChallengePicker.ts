import { challenges } from "@/app/data/challenges";

export function getDailyChallenge() {
    const startDate = new Date('2024-11-15T00:00:00Z'); // UTC time
    const now = new Date();
  
    // Calculate the difference in days
    const diffInTime = now.getTime() - startDate.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
  
    // Use modulo to prevent index out of range
    const index = diffInDays % challenges.length;
  
    return challenges[index];
  }
  