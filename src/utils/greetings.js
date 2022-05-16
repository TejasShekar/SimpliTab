export const getGreetings = (hour) => {
  switch (true) {
    case 5 <= hour && hour <= 11:
      return "Good Morning";
    case 12 <= hour && hour <= 15:
      return "Good Afternoon";
    case 16 <= hour && hour <= 20:
      return "Good Evening";
    case 21 <= hour && hour <= 24:
      return "Good Night";
    default:
      return "Hello";
  }
};
