export const tasksList = [
    {
      _id: 1435,
      title: "Mobile Account settings view",
      status: "new",
      priority: "NORMAL",
      day: 1,
      components: "Web, Mobile, Form",
    },
    {
      _id: 342,
      title: "Dashboard design",
      status: "new",
      priority: "HIGH",
      day: 2,
      components: "Web, App",
    },
    {
      _id: 7683,
      title: "Registration Form",
      status: "new",
      priority: "URGENT",
      day: 1,
      components: "Mobile, Form",
    },
    {
      _id: 674,
      title: "Login view",
      status: "new",
      priority: "HIGH",
      day: 3,
      components: "Mobile, App",
    },
    {
      _id: 5455,
      title: "Web account settings view",
      status: "new",
      priority: "LOW",
      day: 1,
      components: "Web",
    },
    {
      _id: 346,
      title: "Chat redesign",
      status: "wip",
      priority: "NORMAL",
      day: 4,
      components: "Mobile",
    },
    {
      _id: 3667,
      title: "Template design",
      status: "review",
      priority: "HIGH",
      day: 6,
      components: "Form",
    },
    {
      _id: 558,
      title: "Magazine Homepage",
      status: "review",
      priority: "HIGH",
      day: 2,
      components: "Homepage, RWD",
    },
    {
      _id: 49,
      title: "Landing Page",
      status: "done",
      priority: "URGENT",
      day: 1,
      components: "Landing, Homepage",
    },
    {
      _id: 10,
      title: "Form optimization",
      status: "done",
      priority: "NORMAL",
      day: 5,
      components: "Web, Mobile, App",
    },
  ];
  
  export const channels = ["new", "wip", "review", "done"];
  export const labelsMap = {
    // backlog: "Backlog",
    new: "New Tasks",
    wip: "In Progress",
    review: "Review",
    done: "Done",
  };

  export const backColor = {
    NORMAL: "green",
    HIGH: "orange",
    URGENT: "red",
    LOW: "#17c2b4",
  };