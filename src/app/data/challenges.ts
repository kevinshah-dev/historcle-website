export interface Challenge {
    id: number;
    image: string;
    caption: string;
    date: number;
    hint: string;
  }
  
  export const challenges: Challenge[] = [
    {
      id: 1,
      date: 1776,
      caption: "The Thirteen Colonies declare independence from British rule.",
      hint: "This event occurred during the late 18th century amidst the American Revolution.",
      image: "/declaration.jpg",
    },
    {
      id: 2,
      date: 1969,
      caption: "Apollo 11 mission successfully lands humans on the Moon.",
      hint: "This event took place during the height of the Space Race, a significant moment in the 1960s.",
      image: "/moon.webp",
    },
    {
      id: 3,
      date: 1989,
      caption: "The barrier dividing East and West Berlin is torn down.",
      hint: "This event happened near the end of the Cold War, before the 1990s.",
      image: "/berlin.webp",
    },
    {
      id: 7,
      date: 1903,
      caption: "Orville and Wilbur Wright achieve powered flight.",
      hint: "This achievement occurred in the early 20th century, shortly after the turn of the century.",
      image: "/wright.jpg",
    },
    {
      id: 8,
      date: 1517,
      caption: "Martin Luther posts his 95 Theses on the door of All Saints' Church in Wittenberg.",
      hint: "This act of defiance took place in the early 16th century on October 31st.",
      image: "/95.jpg",
    },
    {
      id: 9,
      date: 1598,
      caption: "King Henry IV of France issues the Edict of Nantes, granting religious tolerance to Protestants.",
      hint: "This decree was issued in the latter half of the 16th century.",
      image: "/nantes.jpg",
    },
  ];
