export const getGreetings = (hour) => {
  switch (hour) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return "Good Morning";
    case 12:
    case 13:
    case 14:
    case 15:
      return "Good Afternoon";
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      return "Good Evening";
    case 21:
    case 22:
    case 23:
    case 24:
      return "Good Night";
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    default:
      return "Hello";
  }
};
